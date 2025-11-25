import { LightningElement, track } from "lwc";
import { getRecord, createRecord, updateRecord, deleteRecord } from "lightning/uiRecordApi";
import { getRecordUi } from "lightning/uiRecordApi";


export default class client_side_imperation extends LightningElement {
    
    recordId = '';
    accName;
    accPhone;
    newPhone = '';
    newAccName = '';
    message = '';

    // Input handlers
    handleIdChange(event) {
        this.recordId = event.target.value;
    }

    handlePhoneChange(event) {
        this.newPhone = event.target.value;
    }

    handleNewAccChange(event) {
        this.newAccName = event.target.value;
    }

    // GET RECORD (Imperative)
    handleGetRecord() {
        getRecordUi({ recordId: this.recordId, fields: ['Account.Name', 'Account.Phone'] })
            .then(result => {
                this.accName = result.fields.Name.value;
                this.accPhone = result.fields.Phone.value;
                this.message = 'Record fetched successfully!';
            })
            .catch(error => {
                this.message = 'Error fetching record: ' + error.body.message;
            });
    }

    // UPDATE RECORD (Imperative)
    handleUpdateRecord() {
        const fields = { Id: this.recordId, Phone: this.newPhone };

        updateRecord({ fields })
            .then(() => {
                this.message = 'Record updated successfully!';
                this.accPhone = this.newPhone;
            })
            .catch(error => {
                this.message = 'Error updating: ' + error.body.message;
            });
    }

    // CREATE RECORD (Imperative)
    handleCreateRecord() {
        const fields = { Name: this.newAccName };

        createRecord({ apiName: "Account", fields })
            .then(result => {
                this.message = 'Account Created! Id: ' + result.id;
            })
            .catch(error => {
                this.message = 'Error creating record: ' + error.body.message;
            });
    }

    // DELETE RECORD (Imperative)
    handleDeleteRecord() {
        deleteRecord(this.recordId)
            .then(() => {
                this.message = 'Record deleted successfully!';
                this.accName = null;
                this.accPhone = null;
                this.recordId = '';
                this.newPhone = '';
            })
            .catch(error => {
                this.message = 'Error deleting: ' + error.body.message;
            });
    }
}
