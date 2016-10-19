module a {
    interface ITenant {
        name: string;
        phone: number;
        email: string;
        notes: string;
    }

    interface IAsset {
        acquire_date: number;
        value: number;
        depth: number;
        lat: number;
        lng: number;
        subjects: ISubject[];
        expenses: IExpense[];
        recurings: IRecuring[];
    }

    interface ISubject {
        address: string;
        city: string;
        rooms: number;
        size: number;
        tenant?: ITenant;
        monthly_expenditure: number;
        monthly_rent: number;
        monthly_total: number;
        available_from: number;
        state: SubjectState;
        payments: IPayment[];
        deposits: IDeposit[];
        expenses: IExpense[];
    }

    interface IPayment {
        tenant: string;
        expected_expenditure: number;
        expected_rent: number;
        expected_total: number;
        actual_total: number;
        is_paid: boolean;
        is_forgiven: boolean;
        month: number;
        year: number;
    }

    interface IDeposit {
        tenant: string;
        deposit: number;
        payout: number;
        month: number;
        year: number;
    }

    interface IExpense {
        amount: number;
        note: string;
        month: number;
        year: number;
    }

    interface IRecuring {
        interval: RecuringInterval;
        starting_month: number;
        starting_year: number;
        amount: number;
        note: string;
    }

    enum SubjectState {
        NEW,
        NORMAL,
        BAD
    }

    enum RecuringInterval {
        MONTHLY,
        QUARTERLY,
        BIANNUALLY,
        ANUALLY
    }


    /**
     * Single asset reports
     */
    interface IMonthlyAssetReport {
        asset: IAsset;
        totalExpense: number;
        totalRevenue: number;
        balance: number;
        month: number;
        year: number;
    }

    interface IQuaterlyAssetReport {
        asset: IAsset;
        totalExpense: number;
        totalRevenue: number;
        balance: number;
        months: IMonthlyAssetReport[];
    }

    interface IBiAnnuallyAssetReport {
        asset: IAsset;
        totalExpense: number;
        totalRevenue: number;
        balance: number;
        months: IMonthlyAssetReport[];
    }

    interface IAnnuallyAssetReport {
        asset: IAsset;
        totalExpense: number;
        totalRevenue: number;
        balance: number;
        months: IMonthlyAssetReport[];
    }

    /**
     * All assets
     */
    interface IMonthlyTotalReport {
        assetReports: IMonthlyAssetReport[];
        totalExpense: number;
        totalRevenue: number;
        balance: number;
        month: number;
        year: number;
    }

    interface IQuaterlyAssetReport {
        assetReports: IMonthlyAssetReport[];
        totalExpense: number;
        totalRevenue: number;
        balance: number;
        months: IMonthlyAssetReport[];
    }

    interface IBiAnnuallyAssetReport {
        totalExpense: number;
        totalRevenue: number;
        balance: number;
        months: IMonthlyAssetReport[];
    }

    interface IAnnuallyAssetReport {
        totalExpense: number;
        totalRevenue: number;
        balance: number;
        months: IMonthlyAssetReport[];
    }

    /**
     * Asset occupation reports
     */
    interface ITenantOccupationReport {
        occupations: IOccupation[];
    }

    interface IOccupation {
        tenant: ITenant;
        month_from: number;
        month_to: number;
    }


    /* Features */
    /*
      I want to see all upcoming available subjects
      I want to see a payment grid on month/subject with is_paid as boolean and ability to check them
      I want to see key numbers of last month totalExpense + totalRevenue + profit
      I want to see key numbers of ongoing years totalExpense + totalRevenue + profit
      I want to see a grid with total expected expenses / revenues / profits for each asset & aggregated
      I want to see a list of all assets ranked by most profitting
      I want to see a list of all assets ranked by most occupations
      I want to upload a csv file and auto resolve payment
      and get a status report on resolved / failed entries
    */

}
