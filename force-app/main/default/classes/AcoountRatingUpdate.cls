public class AccountTriggerHandler {

    public static void setAccountRating(List<Account> newAccounts) {
        for (Account acc : newAccounts) {
            // Check if the Industry is Banking or Healthcare
            if (acc.Industry == 'Banking' || acc.Industry == 'Healthcare') {
                acc.Rating = 'Hot';
            }
        }
    }

}
