import { LightningElement, track } from 'lwc';
import insertOrUpdateAccount from '@salesforce/apex/AccountFormController.insertOrUpdateAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountForm extends LightningElement {
    @track accountName = '';
    @track accountNumber = '';
    @track billingAddress = '';
    @track description = '';

    handleChange(event) {
        const field = event.target.dataset.field;
        const value=event.target.value;
        this[field] = value;
        console.log('field',field);
                console.log('value',value);
        console.log('this[field] ',this[field] );
                       // console.log('field',field);

      /*  if(field === 'accountName') {
            this.accountName = event.target.value;
        } else if(field === 'accountNumber') {
            this.accountNumber = event.target.value;
        } else if(field === 'billingAddress') {
            this.billingAddress = event.target.value;
        }*/
    }

    handleSubmit() {
        // ✅ Validation for Account Name
        if (this.accountName.length < 4 || this.accountName.length > 15) {
             //this.showToast('Validation Error', 'Account Name must be 4–15 characters long.', 'error');
           // return;
           alert
        }

        // ✅ Validation for Account Number (max 5 digits)
        if (this.accountNumber && this.accountNumber.toString().length > 5) {
            this.showToast('Validation Error', 'Account Number cannot exceed 5 digits.', 'error');
            //return;
        }

        // Prepare data for Apex
        const acc = {
            Name: this.accountName,
            AccountNumber: this.accountNumber,
            BillingStreet: this.billingAddress,
            Description: this.description
        };

        insertOrUpdateAccount({ accRec: acc })
            .then(result => {
                this.showToast('Success', 'Account saved successfully', 'success');
                this.clearForm();
            })
            .catch(error => {
                this.showToast('Error', error.body.message, 'error');
            });
    }

    clearForm() {
        this.accountName = '';
        this.accountNumber = '';
        this.billingAddress = '';
        this.description = '';
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }
}
