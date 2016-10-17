import {Entity} from '../resources/core.models';

export class TenantModel extends Entity {
    name: string;
    phone: number;
    email: string;
    notes: string;
    createTime: number;
}
