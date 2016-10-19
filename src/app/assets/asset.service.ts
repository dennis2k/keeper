import { ApiService } from '../resources/api.service';
import { autoinject } from "aurelia-framework";
import { AssetModel } from "./asset.model";

@autoinject()
export class AssetService extends ApiService<AssetModel> {

    protected resource: string = "/asset";
    protected model: AssetModel = new AssetModel();
    protected useCache: boolean = false;
    protected notifyOnCreate: boolean = true;
    protected notifyOnUpdate: boolean = true;
    protected notifyOnDelete: boolean = true;

}
