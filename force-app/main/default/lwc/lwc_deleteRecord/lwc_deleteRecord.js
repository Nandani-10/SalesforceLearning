import { LightningElement , api} from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
export default class Lwc_deleteRecord extends LightningElement {
    deleteME(event) {
       @api recordId;
        deleteRecord(this.recordId)
            .then((result) => {
                console.log('Record deleted successfully');
                // Optionally, you can dispatch a toast event or refresh the view
            })
            .catch(error => {
                console.error('Error deleting record: ', error);
            });
}
