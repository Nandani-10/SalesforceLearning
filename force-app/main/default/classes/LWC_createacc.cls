public with sharing class LWC_createacc {

    @AuraEnabled
    public static String createAcc(String accname, String accphn, String accind, String accrat) {
        String msg;

        try {
            Account acc = new Account();
            acc.Name = accname;
            acc.Phone = accphn;
            acc.Industry = accind;
            acc.Rating = accrat;

            insert acc;

            msg = 'Account Created Successfully with Id: ' + acc.Id;
        } 
        catch (Exception e) {
            msg = 'Account cannot be created: ' + e.getMessage();
        }
        return msg;
    }
}
