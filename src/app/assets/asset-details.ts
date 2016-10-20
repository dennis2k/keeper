import { TenantModel } from '../tenants/tenant.model';
import { TenantService } from '../tenants/tenant.service';
import { AssetService } from './asset.service';
import { AssetModel, Recuring, Subject } from './asset.model';
import { autoinject } from 'aurelia-framework';
import { RouteConfig } from 'aurelia-router';
import { AuthService } from 'aurelia-auth';

@autoinject()
export class AssetDetails {
    asset: AssetModel;
    tenants: TenantModel[] = [];

    constructor(
        private assetService: AssetService,
        private authService: AuthService,
        private tenantService: TenantService) { }

    canActivate() {
        return this.authService.isAuthenticated();
    }

    activate(params: any, routeConfig: RouteConfig) {
        if (params.id) {
            let query = this.assetService.createQuery();
            query.populate(['subjects.tenant']);
            this.assetService.getById(params.id, true, query).then(response => this.asset = response);
        } else {
            this.asset = new AssetModel();
        }
        this.tenantService.getAll().then(tenants => {
            this.tenants = tenants;
        });
    }

    addSubject(subject: Subject) {
        this.asset.subjects.push(subject);
        this.save(this.asset);
    }

    addRecuring(recuring: Recuring) {
        this.asset.recurings.push(recuring);
        this.save(this.asset);
    }

    save(asset: AssetModel) {
        this.assetService.save(asset).then((response) => {
            console.log(response);
        });
    }
}
