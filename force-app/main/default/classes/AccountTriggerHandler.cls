public class AccountTriggerHandler {
    public static void setAnnualRevenue(List<Account> accounts) {
        for (Account acc : accounts) {
            if (acc.Industry == 'Banking') acc.AnnualRevenue = 5000000;
            else if (acc.Industry == 'Finance') acc.AnnualRevenue = 4000000;
            else if (acc.Industry == 'Insurance') acc.AnnualRevenue = 3500000;
            else if (acc.Industry == 'Healthcare') acc.AnnualRevenue = 2500000;
            else acc.AnnualRevenue = 500000;
        }
    }
}
