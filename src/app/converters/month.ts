export class MonthValueConverter {

    months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    toView(value: string) {
        if (!value)
            return;
        if (value.length === 5) {
            let month = value[0];
            return this.months[parseInt(month, 10)] + " " + value.slice(-4);
        }
        if (value.length === 6) {
            let month = value.slice(0, 2);
            return this.months[parseInt(month, 10)] + " " + value.slice(-4);
        }
        return value;
    }
}
