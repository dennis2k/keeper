import { Recuring } from './asset.model';
import { bindable } from 'aurelia-framework';

export class AddRecuring {

    @bindable add;
    @bindable toggle: boolean;
    recuring: Recuring = new Recuring();

    dispatch(recuring: Recuring) {
        this.add(recuring);
        this.recuring = new Recuring();
    }

    toggleChanged(newValue: boolean, oldValue: boolean) {
        ($("#recuring") as any).openModal();
    }
}
