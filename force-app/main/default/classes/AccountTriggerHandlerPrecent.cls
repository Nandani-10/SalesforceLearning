public class AccountTriggerHandler {
    public static void preventActiveDeletion(List<Account> oldAccounts) {
        for (Account acc : oldAccounts) {
            if (acc.Active__c == 'Yes') {
                acc.addError('Active Account cannot be deleted.');
            }
        }
    }
}
