public class UpdateLatestCaseNumberHandler {
    
    public static void updateLatestCaseNumbers(List<Case> newCases) {
        Map<Id, String> latestCaseNumbers = new Map<Id, String>();
        Set<Id> accountIds = new Set<Id>();
        
        // Collect Account Ids from new Cases
        for (Case cs : newCases) {
            if (cs.AccountId != null) {
                accountIds.add(cs.AccountId);
            }
        }
        
        if (accountIds.isEmpty()) {
            return;
        }
        
        // Query Cases related to those Accounts
        for (Case cs : [SELECT AccountId, CaseNumber FROM Case WHERE AccountId IN :accountIds]) {
            latestCaseNumbers.put(cs.AccountId, cs.CaseNumber);
        }
        
        // Prepare Accounts to update
        List<Account> accountsToUpdate = new List<Account>();
        for (Id accId : latestCaseNumbers.keySet()) {
            accountsToUpdate.add(new Account(
                Id = accId,
                Latest_Case_Number__c = latestCaseNumbers.get(accId)
            ));
        }
        
        if (!accountsToUpdate.isEmpty()) {
            update accountsToUpdate;
        }
    }
}
