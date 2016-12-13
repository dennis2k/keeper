import { Period } from '../resources/period';
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

    // import
    importPeriod: string;
    importFiles: FileList;

    constructor(
        private authService: AuthService,
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


    fileSelected(periodString: string): void {
        let reader = new FileReader();
        reader.onload =  ()  => {
            console.log(reader.result);
        };
        // start reading the file. When it is done, calls the onload event defined above.
        reader.readAsBinaryString(this.importFiles[0]);

        console.log(periodString);
        let file = this.importFiles[0];
        let period = new Period(periodString);
        if (file) {
            this.paymentService.importFile(file, period.month, period.year).then(res => {
                console.log("IMPOR", res);
            });
        }
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

    createSinglePayment(assetId: string, subject: Subject, when: string) {
        let payment = new PaymentModel();
        payment.setPeriod(when);
        payment.assetId = assetId;
        payment.subjectId = subject._id;
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
