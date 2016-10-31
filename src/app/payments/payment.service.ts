import { C } from '../resources/criteria';
import { Subject } from '../assets/asset.model';
import { ApiService } from '../resources/api.service';
import { autoinject } from 'aurelia-framework';
import { PaymentModel } from './payment.model';

@autoinject()
export class PaymentService extends ApiService<PaymentModel> {

    protected resource: string = "/payment";
    protected model: PaymentModel = new PaymentModel();
    protected useCache: boolean = false;

    getPreviousPayments(monthsOffset: number = 3) {
        let now = new Date();
        now.setMonth(now.getMonth() - monthsOffset);

        let query = this.createQuery();
        query.addCriteria(C.gte("createTime",now.getTime()));
        query.sort('-createTime');
        return super.getByQuery(query);
    }

    createPayment(assetId: string, subjectId: string) {
        let paymentModel = new PaymentModel();
        paymentModel.subjectId = subjectId;
        paymentModel.assetId = assetId;
        return super.save(paymentModel);
    }
}
