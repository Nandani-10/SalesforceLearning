public class ContactHelper {

    public static void descriptionUpdateAcc(List<Contact> newCon) {

        Map<Id, String> updateAccMap = new Map<Id, String>();
        Set<Id> accountIds = new Set<Id>();

        for (Contact con : newCon) {
            if (con.AccountId != null) {
                accountIds.add(con.AccountId);
            }
        }

        if (!accountIds.isEmpty()) {
            List<Account> accList = [
                SELECT Id, Description 
                FROM Account 
                WHERE Id IN :accountIds
            ];

            for (Account ac : accList) {
                updateAccMap.put(ac.Id, ac.Description);
            }
        }

        for (Contact c : newCon) {
            if (c.AccountId != null && updateAccMap.containsKey(c.AccountId)) {
                String accDesc = updateAccMap.get(c.AccountId);
                if (accDesc != null) {
                    c.Description = accDesc;
                }
            }
        }
    }
}