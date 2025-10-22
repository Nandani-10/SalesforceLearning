public class ContactMapFromSet {
    public static void buildMapFromSetAndList() {
      
        Set<Id> accountIds = new Set<Id>();
        List<Contact> contactList = [SELECT Id, FirstName, LastName, AccountId FROM Contact WHERE AccountId != null];

        for (Contact con : contactList) {
            accountIds.add(con.AccountId);
        }

        
        Map<Id, List<Contact>> accountContactMap = new Map<Id, List<Contact>>();

        for (Id accId : accountIds) {
            accountContactMap.put(accId, new List<Contact>());
        }

        for (Contact con : contactList) {
            accountContactMap.get(con.AccountId).add(con);
        }

       
       System.debug( accountContactMap);
        system.debug(accountContactMap.get('001NS00001yVt8QYAS'));
    }
}