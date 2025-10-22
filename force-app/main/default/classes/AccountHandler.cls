public class AccountHandler {
    public static void insertAccount(Integer numberOfAccounts) {
        List<Account> addAccounts = new List<Account>();
        Integer i = 1;

        while (i <= numberOfAccounts) {
            Account acc = new Account();
            acc.Name = 'Acme Inc ' + i;
            acc.AccountNumber = 'A000' + i;
            addAccounts.add(acc);
            i++;
        }

        insert addAccounts;
    }
}