public with sharing class LDS_getAccounts {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String searchAccountsByName) {

        String searchPattern = '%' + searchAccountsByName + '%';

        return [
            SELECT Id, Name, Phone, Industry, Rating
            FROM Account
            WHERE Name LIKE :searchPattern
            ORDER BY Name
        ];
    }
}
