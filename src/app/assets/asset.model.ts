import {TenantModel} from '../tenants/tenant.model';
import {Entity} from '../resources/core.models';

export class AssetModel extends Entity {
    value: number;
    depth: number;
    lat: number;
    lng: number;
    subjects: Subject[];
    expenses: IExpense[];
    recurings: IRecuring[];
    createTime: number;
}

export class Subject {
    address: string;
    city: string;
    rooms: number;
    size: number;
    tenant?: string | TenantModel;
    monthlyExpenditure: number;
    monthlyRent: number;
    monthlyTotal: number;
    availableFrom: number;
    state: SubjectState;
    payments: IPayment[];
    deposits: IDeposit[];
    expenses: IExpense[];
}

interface IPayment {
    tenant: string;
    expectedExpenditure: number;
    expectedRent: number;
    expectedTotal: number;
    actualTotal: number;
    isPaid: boolean;
    isForgiven: boolean;
    month: number;
    year: number;
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

interface IRecuring {
    interval: RecuringInterval;
    startingMonth: number;
    startingYear: number;
    amount: number;
    note: string;
}

enum SubjectState {
    NEW,
    NORMAL,
    BAD
}

enum RecuringInterval {
    MONTHLY,
    QUARTERLY,
    BIANNUALLY,
    ANUALLY
}
