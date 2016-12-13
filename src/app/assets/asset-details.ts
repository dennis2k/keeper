import { BindingSignaler } from 'aurelia-templating-resources';
import { TenantModel } from '../tenants/tenant.model';
import { TenantService } from '../tenants/tenant.service';
import { AssetService, IIntervalOptions, IMonthOption, IStateSelectOption } from './asset.service';
import { AssetModel, Recuring, Subject } from './asset.model';
import { autoinject } from 'aurelia-framework';
import { RouteConfig } from 'aurelia-router';
import { AuthService } from 'aurelia-auth';

@autoinject()
export class AssetDetails {
    asset: AssetModel;
    tenants: TenantModel[] = [];
    subjectStates: IStateSelectOption[] = [];
    intervals: IIntervalOptions[] = [];
    months: IMonthOption[] = [];

    constructor(
        private assetService: AssetService,
        private authService: AuthService,
        private tenantService: TenantService,
        private signaler: BindingSignaler) { }

    canActivate() {
        return this.authService.isAuthenticated();
    }

    activate(params: any, routeConfig: RouteConfig) {
        this.subjectStates = this.assetService.getSubjectStateOptions();
        this.intervals = this.assetService.getIntervalOptions();
        this.months = this.assetService.getMonthOptions();
        if (params.id && params.id !== 'new') {
            this.assetService.getById(params.id).then(response => this.asset = response);
        } else {
            this.asset = new AssetModel();
        }
        return this.tenantService.getAll().then(tenants => {
            this.tenants = tenants;
            this.tenants.unshift({ id: undefined, name: "app.notes.tenant"} as any);
        });
    }

    addEmptySubject() {
        let subject = new Subject();
        subject.identifier = "NYT LEJEMÅL (Klik her)";
        this.asset.subjects.push(subject);
    }

    removeSubject(subject: Subject) {
        let c = confirm("Er du sikker på du vil slette?");
        if (!c)
            return;
        let idx = this.asset.subjects.indexOf(subject);
        this.asset.subjects.splice(idx, 1);
        this.save(this.asset);
    }

    addRecuring() {
        let recuring = new Recuring();
        recuring.name = "NY OMKOSTNING (Klik her)";
        this.asset.recurings.push(recuring);
    }

    removeRecuring(recuring: Recuring) {
        let c = confirm("Er du sikker på du vil slette?");
        if (!c)
            return;

        let idx = this.asset.recurings.indexOf(recuring);
        this.asset.recurings.splice(idx, 1);
        this.save(this.asset);
    }

    save(asset: AssetModel) {
        this.assetService.save(asset).then((response) => {
            this.asset = response;
            this.signaler.signal('refresh');
        });
    }
}
