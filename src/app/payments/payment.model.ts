import { Period } from '../resources/period';
import {TenantModel} from '../tenants/tenant.model';
import {Entity} from '../resources/core.models';

export class PaymentModel extends Entity {
    assetId: string;
    subjectId: string;
    tenant: TenantModel | string;
    expectedExpenditure: number;
    expectedRent: number;
    expectedTotal: number;
    actualTotal: number;
    isPaid: boolean = false;
    isForgiven: boolean = false;
    month: number;
    year: number;
    createTime: number;

    getPeriod(): Period {
        return new Period(this.month + "" + this.year);
    }
    setPeriod(monthAndYear: string) {
        let period = new Period(monthAndYear);
        this.month = period.month;
        this.year = period.year;
    }
}
