import { ApiService } from '../resources/api.service';
import { autoinject } from "aurelia-framework";
import { PaymentModel } from "./payment.model";

@autoinject()
export class TenantService extends ApiService<PaymentModel> {

    protected resource: string = "/payment";
    protected model: PaymentModel = new PaymentModel();
    protected useCache: boolean = false;

}
