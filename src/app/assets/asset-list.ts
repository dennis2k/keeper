import { AssetService } from './asset.service';
import { AssetModel } from './asset.model';
import { autoinject } from 'aurelia-framework';
import { AuthService } from 'aurelia-auth';

@autoinject()
export class AssetList {
    asset: AssetModel = new AssetModel();
    assets: AssetModel[] = [];

    constructor(
        private assetService: AssetService,
        private authService: AuthService) {

        this.assetService.getAll().then(response => this.assets = response);
    }

    canActivate() {
        return this.authService.isAuthenticated();
    }

    /*edit(tenant: TenantModel) {
        this.tenant = tenant;
        ($("#tenant") as any).openModal();
    }*/

    /*save(tenant: TenantModel) {
        console.log(tenant);
        this.tenantService.save(tenant).then((response) => {
            if (this.tenant._id)
                return;
            tenant._id = response._id;
            this.tenants.push(tenant);
        });
    }*/

    remove(asset: AssetModel) {
        this.assetService.remove(asset._id).then(() => {
            this.assets.splice(this.assets.indexOf(asset), 1);
        });
    }
}
