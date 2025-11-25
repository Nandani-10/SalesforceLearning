import { LightningElement, track } from 'lwc';
import insertAccount from '@salesforce/apex/AccountCreation.insertAccount';
import updateAccount from '@salesforce/apex/AccountCreation.updateAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
 
export default class Task2 extends LightningElement {
    @track accountName = '';
    @track accountNumber = '';
    @track billingAddress = '';
    @track description = '';
 
    handleChange(event) {
        const field=event.target.name;
                const value=event.target.value;
                this[field]=value;
                if(field==='accountName' && (value.length<4 || value.length>15 ) ){
                    event.target.setCustomValidity('Acc Name should be between 4-15');
 
                }
                if(field==='accountNumber' && value.length>5){
                    event.target.setCustomValidity('Acc Number should be less than 5');
                }
                event.target.reportValidity();
            }
       
 
 
    handleSubmit() {
     
        const acc = {
            Name: this.accountName,
            AccountNumber: this.accountNumber,
            BillingStreet: this.billingAddress,
            Description: this.description
        };
 
        insertAccount({ acc })
            .then(() => {
                this.showToast('Success', 'Account created successfully', 'success');
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
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant
            })
        );
    }
}
 
 
 