import { LightningElement } from 'lwc';
import sendEmail from '@salesforce/apex/sendEmail.sendEmail';
export default class SendEmail extends LightningElement {
    toAddress = '';
    subject = '';
    body = '';

    handleEmailChange(event) {
        this.toAddress = event.target.value;
    }

    handleSubjectChange(event) {
        this.subject = event.target.value;
    }

    handleBodyChange(event) {
        this.body = event.target.value;
    }

    sendEmail() {
        sendEmail({
            toAddress: this.toAddress,
            subject: this.subject,
            body: this.body
        })
        .then(result => {
            console.log('Email sent successfully:', result);
            alert('Email sent successfully: ' + result);
        })
        .catch(error => {
            let msg  = 'Error sending email: ' + error.body.message;
            console.error('Error sending email:', JSON.stringify(error));
            alert(msg);
        });
    }

    closeComponent() {
        // Logic to close the component or navigate away
        console.log('Close button clicked');
    }   
}