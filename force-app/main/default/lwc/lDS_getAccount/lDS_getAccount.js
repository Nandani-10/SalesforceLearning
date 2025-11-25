import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/LDS_getAccounts.getAccounts';
import { updateRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountSearch extends LightningElement {

    @track accounts = [];
    @track draftValues = [];
    @track message = '';

    searchKey = '';

    columns = [
        { label: 'Name', fieldName: 'Name', type: 'text', editable: true },
        { label: 'Phone', fieldName: 'Phone', type: 'phone', editable: true },
        { label: 'Industry', fieldName: 'Industry', type: 'text', editable: true },
        { label: 'Rating', fieldName: 'Rating', type: 'text', editable: true }
    ];

    // SEARCH INPUT HANDLER
    handleSearch(event) {
        this.searchKey = event.target.value;

        getAccounts({ searchAccountsByName: this.searchKey })
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                console.error(error);
            });
    }

    // SAVE UPDATED ROWS
    handleSave(event) {
        const updatedFields = event.detail.draftValues;

        const recordInputs = updatedFields.map(draft => {
            return { fields: { ...draft } };
        });

        const updatePromises = recordInputs.map(recordInput =>
            updateRecord(recordInput)
        );

        Promise.all(updatePromises)
            .then(() => {
                this.showToast('Success', 'Records Updated Successfully', 'success');

                // Clear draft values
                this.draftValues = [];

                // Refresh table
                return getAccounts({ searchAccountsByName: this.searchKey });
            })
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                this.showToast('Error Updating Records', error.body.message, 'error');
            });
    }

    // Toast helper
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
