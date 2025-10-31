public class ContactTriggerHandler {

    public static void createAccountForContacts(List<Contact> newContacts) {
        List<Account> accountsToCreate = new List<Account>();
        Map<Id, Id> contactToAccountMap = new Map<Id, Id>();

        // Loop through all new Contacts
        for (Contact con : newContacts) {
            if (con.AccountId == null) {
                // Create new Account for each contact without an account
                Account acc = new Account(
                    Name = 'Account for ' + (con.LastName != null ? con.LastName : 'Unknown')
                );
                accountsToCreate.add(acc);
            }
        }

        // Insert the Accounts if any exist
        if (!accountsToCreate.isEmpty()) {
            insert accountsToCreate;
        }


    }
}
