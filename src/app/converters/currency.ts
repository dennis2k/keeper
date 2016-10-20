export class CurrencyValueConverter {
    toView(value) {
        let val = new Number(value);
        return "Kr. " + (val as any).format(2, 3, '.', ',');
    }
}
