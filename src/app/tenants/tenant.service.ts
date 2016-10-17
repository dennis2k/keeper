import { ApiService } from '../resources/api.service';
import { autoinject } from "aurelia-framework";
import { TenantModel } from "./tenant.model";

@autoinject()
export class TenantService extends ApiService<TenantModel> {

    protected resource: string = "/tenant";
    protected model: TenantModel = new TenantModel();
    protected useCache: boolean = false;
    protected notifyOnCreate: boolean = true;
    protected notifyOnUpdate: boolean = true;
    protected notifyOnDelete: boolean = true;

}
