public class SimpleAccountContactMap {

    public static void createMap() {

        List<Contact> cons = [SELECT Id, Name, AccountId FROM Contact WHERE AccountId != null];

        Map<Id, List<Contact>> accConMap = new Map<Id, List<Contact>>();

        for (Contact c : cons) {
            if (accConMap.get(c.AccountId) == null) {
                accConMap.put(c.AccountId, new List<Contact>());
            }
            accConMap.get(c.AccountId).add(c);
        }

        System.debug(accConMap);
    }
}