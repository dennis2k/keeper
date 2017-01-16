import { Router } from 'aurelia-router';
import { FileService } from '../resources/file.service';
import { BindingSignaler } from 'aurelia-templating-resources';
import { PaymentModel } from './payment.model';
import { AssetModel, Subject } from '../assets/asset.model';
import { AssetService } from '../assets/asset.service';
import { PaymentService } from './payment.service';
import { AuthService } from 'aurelia-auth';
import { autoinject } from 'aurelia-dependency-injection';

@autoinject
export class PaymentGrid {
    offset: number = 1;
    subjects: Subject[] = [];
    assets: AssetModel[] = [];
    months: string[] = [];
    grid: Map<string, Map<string, PaymentModel>> = new Map<string, Map<string, PaymentModel>>();
    modal: any;
    importResult: IImortResult;

    // import
    importPeriod: string;
    importFiles: FileList;

    constructor(
        private authService: AuthService,
        private router: Router,
        private fileService: FileService,
        private paymentService: PaymentService,
        private assetService: AssetService,
        private signaler: BindingSignaler) { }

    canActivate() {
        return this.authService.isAuthenticated();
    }

    activate() {
        return this.assetService
            .populate(['subjects.tenant'])
            .getAll()
            .then(assets => {
                this.assets = assets;
                this.populateGrid();
                return this.paymentService.getPreviousPayments();
            })
            .then((payments) => {
                this.mapPayments(payments, this.assets);
            });
    }


    import(periodString: string) {
        let reader = new FileReader();
        reader.onload = () => {
            let rows = this.fileService.csvToJson(reader.result, true);
            this.importResult = this.autoCheckByBankStatement(periodString, rows);
            this.modal.open();
        };
        reader.readAsBinaryString(this.importFiles[0]);
    }

    confirmImport() {
        this.signaler.signal('refresh');
    }

    autoCheckByBankStatement(periodString: string, rows: any[]): IImortResult {
        let output = {
            success: [],
            warning: [],
            notfound: []
        };
        this.assets.forEach(asset => {
            asset.subjects.forEach(subject => {
                let subjectFound = false;
                let amountMisMatches = [];
                let amountMatched = false;
                rows.forEach((row) => {
                    let rowTransactionText = row['key_2'];
                    let subjectMatchTransaction = Subject.compareTransactionText(subject.transactionText, rowTransactionText);
                    // We've found a matching text
                    if (subjectMatchTransaction) {
                        subjectFound = true;
                        let rowAmount = row['key_4'];
                        if (parseInt(rowAmount, 10) === subject.monthlyTotal) {
                            amountMatched = true;
                            let payment = subject.payments.get(periodString);
                            if (payment) {
                                payment.isPaid = true;
                                subject.payments.set(periodString, payment);
                                this.paymentService.save(payment).then(() => this.signaler.signal('refresh'));
                            } else {
                                this.createSinglePayment(asset._id, subject, periodString, true);
                            }
                            output.success.push(
                                {
                                    address: asset.address + " " + subject.identifier,
                                    identifier: subject.transactionText,
                                    monthlyTotal: subject.monthlyTotal
                                }
                            );
                        } else {
                            amountMisMatches.push(rowAmount);
                        }
                    }
                });
                if (!subjectFound) {
                    output.notfound.push(
                        {
                            address: asset.address + " " + subject.identifier,
                            identifier: subject.transactionText,
                            monthlyTotal: subject.monthlyTotal
                        }
                    );
                }
                if (subjectFound && !amountMatched) {
                    output.warning.push(
                        {
                            address: asset.address + " " + subject.identifier,
                            identifier: subject.transactionText,
                            monthlyTotal: subject.monthlyTotal,
                            mismatches: amountMisMatches.join(", ")
                        }
                    );
                }
            });
        });
        console.log(output);
        return output;
    }

    mapPayments(payments: PaymentModel[], assets: AssetModel[]) {
        payments.forEach((payment) => {
            assets.forEach(asset => {
                if (asset._id === payment.assetId) {
                    asset.subjects.forEach(subject => {
                        if (subject._id === payment.subjectId) {
                            let key = payment.month + "" + payment.year;
                            if (subject.payments.has(key)) {
                                subject.payments.set(key, payment);
                            }
                        }
                    });
                }
            });
        });
    }

    decreaseOffset(offset: number) {
        this.offset -= 1;
        this.populateGrid();
        this.paymentService.getPreviousPayments().then((payments) => {
            this.mapPayments(payments, this.assets);
        });
        this.signaler.signal('refresh');
    }

    increaseOffset(offset: number) {
        this.offset += 1;
        this.populateGrid();
        this.paymentService.getPreviousPayments().then((payments) => {
            this.mapPayments(payments, this.assets);
        });
        this.signaler.signal('refresh');
    }

    getMonthlyTotalPayments(month: string, onlyPaid: boolean = true): number {
        let total = 0;
        this.assets.forEach(asset => {
            total += this.getAssetMonthlyTotalPayments(month, asset, onlyPaid);
        });
        return total;
    }

    getAssetMonthlyTotalPayments(when: string, asset: AssetModel, onlyPaid: boolean = true): number {
        let total = 0;
        asset.subjects.forEach(subject => {
            subject.payments.forEach(payment => {
                if (!payment)
                    return;
                let qualified = payment.month + "" + payment.year === when;
                if (qualified) {
                    if ((onlyPaid && payment.isPaid) || !onlyPaid) {
                        total += payment.expectedTotal;
                    }
                }
            });
        });
        return total;
    }

    getPercentageProgress(when: string): number {
        let expected = this.getMonthlyTotalPayments(when, false);
        let paid = this.getMonthlyTotalPayments(when, true);
        let val = Math.ceil(((paid / expected) * 100));
        return isNaN(val) ? 0 : val;
    }

    togglePaid(payment: PaymentModel) {
        payment.isPaid = !!payment.isPaid;
        this.paymentService.save(payment).then(() =>
            this.signaler.signal('refresh')
        );
    }

    createSinglePayment(assetId: string, subject: Subject, when: string, isPaid: boolean = false) {
        let payment = new PaymentModel();
        payment.setPeriod(when);
        payment.assetId = assetId;
        payment.subjectId = subject._id;
        payment.isPaid = isPaid;
        this.paymentService.save(payment).then(response => {
            subject.payments.set(when, response);
            this.signaler.signal('refresh');
        });
    }

    createPaymentsForMonth(when: string) {
        this.assets.forEach((asset) => {
            asset.subjects.forEach((subject) => {
                let payment = subject.payments.get(when);
                if (!payment)
                    this.createSinglePayment(asset._id, subject, when);
            });
        });
    }

    removePayment(subject: Subject, payment: PaymentModel, when: string) {
        this.paymentService.remove(payment._id).then(() => {
            subject.payments.set(when, undefined);
            this.signaler.signal('refresh');
        });
    }

    populateGrid() {
        this.months = [];
        let monthGrid = new Map<string, PaymentModel>();
        for (let i = 2; i > -1; i--) {
            let now = new Date();
            now.setDate(15);
            now.setMonth(now.getMonth() - i + this.offset);
            let key = "" + now.getMonth() + "" + now.getFullYear();
            this.months.push(key);
            monthGrid.set(key, undefined);
        }
        this.assets.forEach(asset => {
            asset.subjects.forEach(subject => {
                subject.payments = new Map<string, PaymentModel>(monthGrid);
            });
        });
    }
}

interface IImortResult {
    success: string[];
    warning: string[];
    notfound: string[];
}
