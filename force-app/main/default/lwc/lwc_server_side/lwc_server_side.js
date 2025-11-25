import { LightningElement } from 'lwc';
import createAcc from '@salesforce/apex/LWC_createacc.createAcc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Lwc_server_side extends LightningElement {

    accname = '';
    accphn = '';
    accind = '';
    accrat = ''; 

    handleAccountNameChange(event) {
        this.accname = event.target.value;
    }

    handleAccountPhoneChange(event) {
        this.accphn = event.target.value;
    }   

    handleAccountIndustryChange(event) {
        this.accind = event.target.value;
    }   

    handleAccountRatingChange(event) {
        this.accrat = event.target.value;
    }   

    createAccount() {   // ✅ renamed to match HTML
        createAcc({
            accname: this.accname,
            accphn: this.accphn,
            accind: this.accind,
            accrat: this.accrat
        })
        .then(result => {
            console.log('Account created successfully:', result);
            console.log('promises '+ typeof(result));
            alert(result);
        })
        .catch(error => {
            msg  = 'Error creating account: ' + error.getlineNumber + ' ' + error.message;
            console.error('Error creating account:', JSON.stringify(error));
            alert(msg);
        });
    }   
}
