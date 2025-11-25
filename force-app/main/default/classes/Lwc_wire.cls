public with sharing class Lwc_wire {
    @AuraEnabled (cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Phone, Industry, Rating FROM Account];
    }
    @AuraEnabled (cacheable=true)
    public static List<Contact> getContacts() {
        return [SELECT Id, FirstName, LastName, Email, Phone FROM Contact]; 
    }
}