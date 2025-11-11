public class AccountFormController {

    @AuraEnabled(cacheable=false)
    public static Account insertOrUpdateAccount(Account accRec) {
        if (accRec == null) {
            throw new AuraHandledException('Account record is null.');
        }

        if (accRec.Id == null) {
            insert accRec; // ➕ Insert new Account
        } else {
            update accRec; // 🔁 Update existing Account
        }
        return accRec;
    }
}
