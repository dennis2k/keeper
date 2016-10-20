import {TenantModel} from '../tenants/tenant.model';
import {Entity} from '../resources/core.models';
export class PaymentModel extends Entity {
    tenant: TenantModel | string;
    expectedExpenditure: number;
    expectedRent: number;
    expectedTotal: number;
    actualTotal: number;
    isPaid: boolean = false;
    isForgiven: boolean = false;
    month: number;
    year: number;
}
