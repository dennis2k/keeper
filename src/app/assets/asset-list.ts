import { Router } from 'aurelia-router';
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
        private authService: AuthService,
        private router: Router) {

        this.assetService.get().then(response => this.assets = response);
    }

    canActivate() {
        return this.authService.isAuthenticated();
    }

    remove(asset: AssetModel) {
        let c = confirm("Er du sikker?");
        if (!c)
            return;

        this.assetService.remove(asset._id).then(() => {
            this.assets.splice(this.assets.indexOf(asset), 1);
        });
    }

    navigateToAsset(id: string) {
        this.router.navigateToRoute('assetsDetails', { id: id });
    }
}
