import { TenantModel } from '../tenants/tenant.model';
import { Subject } from './asset.model';
import { bindable } from 'aurelia-framework';

export class AddSubject {

    @bindable add;
    @bindable toggle: boolean;
    @bindable tenants: TenantModel[];
    subject: Subject = new Subject();


    addSubject(subject: Subject) {
        this.add(subject);
    }

    toggleChanged(newValue: boolean, oldValue: boolean) {
        ($("#subject") as any).openModal();
    }

    monthlyTotal(subject) {
        let rent = parseInt(subject.monthlyRent as any,10) || 0;
        let exp = parseInt(subject.monthlyExpenditure as any,10) || 0;
        subject.monthlyTotal = (isNaN(rent) ? 0 : rent) + (isNaN(exp) ? 0 : exp);
    }
}
