import { PaymentModel } from '../payments/payment.model';
import { TenantModel } from '../tenants/tenant.model';
import { Entity } from '../resources/core.models';

export class AssetModel extends Entity {
    value: number;
    depth: number;
    address: string;
    city: string;
    lat: number;
    lng: number;
    subjects: Subject[] = [];
    recurings: Recuring[] = [];
    createTime: number;

    isMonthlyPossitiv: boolean;

    setSubjectTotal(subject: Subject) {
        let rent = parseInt(subject.monthlyRent as any, 10) || 0;
        let exp = parseInt(subject.monthlyExpenditure as any, 10) || 0;
        subject.monthlyTotal = (isNaN(rent) ? 0 : rent) + (isNaN(exp) ? 0 : exp);
    }

    getMonthlyProfit() {
        let result = this.getMonthlyTotal() - this.getMonthlyExpenses();
        this.isMonthlyPossitiv = (result > 0) ? true : false;
        return result;
    }

    getMonthlyTotal() {
        let sum = 0;
        this.subjects.forEach((subject) => {
            let subjectTotal = subject.monthlyTotal;
            sum += (isNaN(subjectTotal) ? 0 : parseInt(subject.monthlyTotal as any, 10));
        });
        return sum;
    }

    getMonthlyExpenses() {
        let sum = 0;
        this.recurings.forEach(recuring => {
            if (!recuring || isNaN(recuring.amount))
                return;
            if (recuring.interval === RecuringInterval.MONTHLY) {
                sum += recuring.amount;
            } else if (recuring.interval === RecuringInterval.QUARTERLY) {
                sum += (recuring.amount / 3);
            } else if (recuring.interval === RecuringInterval.BIANUALLY) {
                sum += (recuring.amount / 6);
            } else if (recuring.interval === RecuringInterval.ANUALLY) {
                sum += (recuring.amount / 12);
            }
        });
        return sum;
    }
}

export class Subject {
    _id: string;
    identifier: string;
    rooms: number;
    size: number;
    tenant?: string | TenantModel;
    monthlyExpenditure: number;
    monthlyRent: number;
    monthlyTotal: number;
    availableFrom: number;

    state: string = SubjectState.NORMAL;
    deposits: IDeposit[];
    payments: Map<string, PaymentModel> | undefined = new Map<string, PaymentModel>();
    //cacl
    m2Cost: number;
}

interface IDeposit {
    tenant: string;
    deposit: number;
    payout: number;
    month: number;
    year: number;
}

interface IExpense {
    amount: number;
    note: string;
    month: number;
    year: number;
}

export class Recuring {
    interval: string = RecuringInterval.QUARTERLY;
    name: string;
    startingMonth: number;
    startingYear: number;
    amount: number;
    note: string;
}

export class SubjectState {
    static NEW = "NEW";
    static NORMAL = "NORMAL";
    static BAD = "BAD";
}

export class RecuringInterval {
    static MONTHLY: string = "MONTHLY";
    static QUARTERLY: string = "QUARTERLY";
    static BIANUALLY: string = "BIANUALLY";
    static ANUALLY: string = "ANUALLY";
}
