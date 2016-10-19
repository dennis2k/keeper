import { AssetService } from './asset.service';
import { AssetModel } from './asset.model';
import { autoinject } from 'aurelia-framework';
import { RouteConfig } from 'aurelia-router';
import { AuthService } from 'aurelia-auth';

@autoinject()
export class AssetDetails {
    asset: AssetModel;

    constructor(
        private assetService: AssetService,
        private authService: AuthService) {
    }

    canActivate() {
        return this.authService.isAuthenticated();
    }

    activate(params: any, routeConfig: RouteConfig) {
        if (params.id) {
            this.assetService.getById(params.id).then(response => this.asset = response);
        } else {
            this.asset = new AssetModel();
        }
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
