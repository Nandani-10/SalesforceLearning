public class EasyAccountQuery {
    public static void getAccountsWithContacts() {
        // Fetch Accounts with at least 2 Contacts
        List<Account> accounts = [SELECT Id, Name, Industry FROM Account];

        for (Account acc : accounts) {
            // Count related contacts
            List<Contact> contacts = [SELECT Id FROM Contact WHERE AccountId = :acc.Id];
            
            if (contacts.size() >= 2) {
                System.debug('Account Name: ' + acc.Name + ', Industry: ' + acc.Industry);
            }
        }
    }
}