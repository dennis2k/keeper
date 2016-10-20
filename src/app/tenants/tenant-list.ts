import { TenantService } from './tenant.service';
import { TenantModel } from './tenant.model';
import { autoinject } from 'aurelia-framework';
import { AuthService } from 'aurelia-auth';

@autoinject()
export class TenantList {
    tenant: TenantModel = new TenantModel();
    tenants: TenantModel[] = [];

    constructor(
        private tenantService: TenantService,
        private authService: AuthService) {

        this.tenantService.getAll().then((response) => {
            this.tenants = response;
        });
    }

    canActivate() {
        return this.authService.isAuthenticated();
    }

    edit(tenant?: TenantModel) {
        if (!tenant)
            tenant = new TenantModel();
        this.tenant = tenant;
        ($("#tenant") as any).openModal();
    }

    save(tenant: TenantModel) {
        console.log(tenant);
        this.tenantService.save(tenant).then((response) => {
            if (this.tenant._id)
                return;
            tenant._id = response._id;
            this.tenants.push(tenant);
        });
    }

    remove(tenant: TenantModel) {
        this.tenantService.remove(tenant._id).then(() => {
            this.tenants.splice(this.tenants.indexOf(tenant), 1);
        });
    }
}
