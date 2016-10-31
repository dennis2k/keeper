export class TValueConverter {
    toView(value: string) {
       return window["t"][value] || value;
    }
}
