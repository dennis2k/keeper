import { C } from '../resources/criteria';
import { Query } from '../resources/query';
import { ApiService } from '../resources/api.service';
import { autoinject } from 'aurelia-framework';
import { AssetModel, RecuringInterval, SubjectState } from './asset.model';

@autoinject()
export class AssetService extends ApiService<AssetModel> {

    protected resource: string = "/asset";
    protected model: AssetModel = new AssetModel();
    protected useCache: boolean = false;
    protected notifyOnCreate: boolean = true;
    protected notifyOnUpdate: boolean = true;
    protected notifyOnDelete: boolean = true;

    get(query?: Query, withEntity: boolean = true): Promise<AssetModel[]> {
        if (!query)
            query = this.createQuery();
        query.populate(["subjects.tenant"]);
        return super.getByQuery(query, withEntity);
    }

    getSubjectStateOptions(): IStateSelectOption[] {
        return [{
            id: SubjectState.BAD,
            display: "app.state.bad"
        },
        {
            id: SubjectState.NORMAL,
            display: "app.state.normal"
        },
        {
            id: SubjectState.NEW,
            display: "app.state.new"
        }];
    }

    getIntervalOptions(): IIntervalOptions[] {
        return [
            {
                id: RecuringInterval.ANUALLY,
                display: "app.interval.anually"
            },
            {
                id: RecuringInterval.BIANUALLY,
                display: "app.interval.bianually"
            },
            {
                id: RecuringInterval.QUARTERLY,
                display: "app.interval.quaterly"
            },
            {
                id: RecuringInterval.MONTHLY,
                display: "app.interval.monthly"
            }
        ];
    }

    getMonthOptions(): IMonthOption[] {
        return [
            { id: 0, display: "app.jan" },
            { id: 1, display: "app.feb" },
            { id: 2, display: "app.mar" },
            { id: 3, display: "app.apr" },
            { id: 4, display: "app.may" },
            { id: 5, display: "app.jun" },
            { id: 6, display: "app.jul" },
            { id: 7, display: "app.aug" },
            { id: 8, display: "app.sep" },
            { id: 9, display: "app.oct" },
            { id: 10, display: "app.nov" },
            { id: 11, display: "app.dec" }
        ];
    }
}

export interface IStateSelectOption {
    id: string;
    display: string;
}
export interface IIntervalOptions {
    id: string;
    display: string;
}
export interface IMonthOption {
    id: number;
    display: string;
}
