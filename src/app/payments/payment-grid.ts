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
                console.log(this.months);
                return this.paymentService.getPreviousPayments();
            })
            .then((payments) => {
                this.mapPayments(payments, this.assets);
                
            });
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
    }

    increaseOffset(offset: number) {
        this.offset += 1;
        this.populateGrid();
        this.paymentService.getPreviousPayments().then((payments) => {
            this.mapPayments(payments, this.assets);
        });
    }

    getMonthlyTotalPayments(month: string) {
        let total = 0;
        this.assets.forEach(asset => {
            total += this.getAssetMonthlyTotalPayments(month, asset);
        });
        return total;
    }

    getAssetMonthlyTotalPayments(month: string, asset: AssetModel) {
        let total = 0;
        asset.subjects.forEach(subject => {
            subject.payments.forEach(payment => {
                if (payment && payment.isPaid && payment.month + "" + payment.year === month) {
                    total += payment.expectedTotal;
                }
            });
        });
        return total;
    }

    togglePaid(payment: PaymentModel) {
        payment.isPaid = !!payment.isPaid;
        this.paymentService.save(payment);
        this.signaler.signal('refresh');
    }

    createSinglePayment(assetId: string, subject: Subject, when: string) {
        let payment = new PaymentModel();
        payment.setPeriod(when);
        payment.assetId = assetId;
        payment.subjectId = subject._id;
        this.paymentService.save(payment).then(response => {
            subject.payments.set(when, response);
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
            subject.payments.set(when,undefined);
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
        console.log(this.months);
        this.assets.forEach(asset => {
            asset.subjects.forEach(subject => {
                subject.payments = new Map<string, PaymentModel>(monthGrid);
            });
        });
    }
}
