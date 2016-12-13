import { autoinject } from 'aurelia-framework';
import { AssetService } from '../assets/asset.service';
import { AssetModel, Subject } from '../assets/asset.model';

@autoinject
export class Dashboard {
    assets: AssetModel[] = [];

    bestM2Cost: Subject;
    worstM2Cost: Subject;
    averageM2Cost: number;

    constructor(private assetService: AssetService) {
        this.assetService.getAll().then(assets => {
            this.assets = assets;
            this.calcM2();
        });
    }

    calcM2() {
        let totalM2 = 0;
        this.assets.forEach(asset => {
            let assetM2 = 0;
            asset.subjects.forEach(subject => {
                let m2Cost = subject.monthlyTotal / subject.size;
                (subject as any).m2Cost = m2Cost;
                (subject as any).address = asset.address + " " + subject.identifier;
                assetM2 += m2Cost;
                if (!this.bestM2Cost || (subject.m2Cost > this.bestM2Cost.m2Cost))
                    this.bestM2Cost = subject;
                if (!this.worstM2Cost || subject.m2Cost < this.worstM2Cost.m2Cost)
                    this.worstM2Cost = subject;
            });
            (asset as any).m2cost = assetM2 / asset.subjects.length;
            totalM2 += assetM2;
        });
        this.averageM2Cost = totalM2 / this.assets.length;
    }
}
