export class CurrencyValueConverter {
    toView(value) {
        return "Kr. " + value.format(2, 3, '.', ',');
    }
}
