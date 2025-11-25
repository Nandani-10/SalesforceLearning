public with sharing class SendEmail {
    @AuraEnabled
    public static String sendEmail(String toAddress, String subject, String body) {
        try {
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            mail.setToAddresses(new String[] { toAddress });
            mail.setSubject(subject);
            mail.setPlainTextBody(body);
            Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
            return 'Email sent successfully to ' + toAddress;
        } catch (Exception e) {
            return 'Failed to send email: ' + e.getMessage();
        }
    }
}