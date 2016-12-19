export class Period {

    constructor(public value: string) {}

    get month(): number {
        let month = (this.value.length === 5) ? this.value[0] : this.value.substr(0, 2);
        return parseInt(month,10);
    }

    get year(): number {
        return parseInt(this.value.slice(-4),10);
    }

    equals(period: Period): boolean {
        if (this.month === period.month && this.year === period.year)
            return true;
        return false;
    }

    static getNextPeriod(offset: number = 0): Period {
        let now = new Date();
        now.setMonth(now.getMonth() - offset);
        let key = "" + now.getMonth() + "" + now.getFullYear();
        return new Period(key);
    }
}
