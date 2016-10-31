export class CurrencyValueConverter {
    toView(value, hideOnZero) {
        let val = new Number(value);
        if(hideOnZero && value === 0)
            return "";
        return "Kr. " + (val as any).format(2, 3, '.', ',');
    }
}
