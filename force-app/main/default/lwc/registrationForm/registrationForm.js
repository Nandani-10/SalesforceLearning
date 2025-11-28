import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import sendThankYouEmail from '@salesforce/apex/FormController.sendThankYouEmail';

export default class RegistrationForm extends NavigationMixin(LightningElement) {

    @track fullName = '';
    @track email = '';
    @track phone = '';
    @track country = '';
    @track gender = '';
    @track about = '';
    @track termsAccepted = false;

    countryOptions = [
        { label: 'India', value: 'India' },
        { label: 'USA', value: 'USA' },
        { label: 'UK', value: 'UK' }
    ];

    genderOptions = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' }
    ];

    handleChange(event) {
        const field = event.target.dataset.id;

        if (field === 'terms') {
            this.termsAccepted = event.target.checked;
        } else {
            this[field] = event.target.value;
        }
    }

    handleSubmit() {

        let isValid = true;

        // Validate all inputs
        const inputs = this.template.querySelectorAll(
            'lightning-input, lightning-combobox, lightning-textarea, lightning-radio-group'
        );

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.reportValidity();
                isValid = false;
            }
        });

        if (!this.termsAccepted) {
            alert("You must accept Terms & Conditions");
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // ✅ Call Apex to send email
        sendThankYouEmail({
            fullName: this.fullName,
            email: this.email
        })
        .then(() => {
            // ✅ Navigate after successful submission
            this.navigateToThankYou();
        })
        .catch(error => {
            console.error('Email Error:', error);
            alert('Submission complete but email failed');
        });

    }

    navigateToThankYou() {
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__thankYouPage'
            }
        });
    }
}
