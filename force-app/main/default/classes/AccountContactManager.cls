public class AccountContactManager {

    // Create an Account and return its Id
    public static Id createAccount(String accName) {
        Account acc = new Account(Name = accName);
        insert acc;
        System.debug('Created Account: ' + acc.Name);
        return acc.Id;
    }

    // Add Contacts to an Account
    public static void addContacts(Id accountId, List<String> contactNames) {
        List<Contact> contactsToInsert = new List<Contact>();
        for (String name : contactNames) {
            contactsToInsert.add(new Contact(FirstName = name, LastName = 'Test', AccountId = accountId));
        }
        insert contactsToInsert;
        System.debug('Inserted Contacts: ' + contactsToInsert);
    }

    // Query Contacts under an Account
    public static void showContacts(Id accountId) {
        List<Contact> contacts = [SELECT Id, FirstName, LastName FROM Contact WHERE AccountId = :accountId];
        for (Contact c : contacts) {
            System.debug('Contact: ' + c.FirstName + ' ' + c.LastName);
        }
    }

    // Update a Contact's Last Name
    public static void updateContactLastName(Id contactId, String newLastName) {
        Contact c = [SELECT Id, LastName FROM Contact WHERE Id = :contactId LIMIT 1];
        c.LastName = newLastName;
        update c;
        System.debug('Updated Contact Last Name to: ' + newLastName);
    }

    // Delete a Contact
    public static void deleteContact(Id contactId) {
        delete [SELECT Id FROM Contact WHERE Id = :contactId];
        System.debug('Deleted Contact with Id: ' + contactId);
    }
}