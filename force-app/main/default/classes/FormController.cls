public class FormController {

    @AuraEnabled
    public static void sendThankYouEmail(String fullName, String email) {

        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();

        mail.setToAddresses(new String[]{ email });
        mail.setSubject('Thank You for Your Submission');
        mail.setPlainTextBody(
            'Hi ' + fullName + ',\n\n' +
            'Thank you for submitting the form.\n\n' +
            'We will contact you shortly.\n\n' +
            'Regards,\nSupport Team'
        );

        Messaging.sendEmail(new Messaging.SingleEmailMessage[]{ mail });
    }
}
