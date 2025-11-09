public class ContactTriggerHandler {
    public static void ensureAccountAssociation(List<Contact> contacts) {
        for (Contact con : contacts) {
            if (con.AccountId == null) {
                con.addError('Each Contact must be associated with an Account.');
            }
        }
    }
}
