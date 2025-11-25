import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import getOpportunities from '@salesforce/apex/OpportunityDataController.getOpportunities';
import getTotalCount from '@salesforce/apex/OpportunityDataController.getTotalCount';
import saveOpportunities from '@salesforce/apex/OpportunityDataController.saveOpportunities';
import deleteOpportunity from '@salesforce/apex/OpportunityDataController.deleteOpportunity';

export default class OpportunityTable extends LightningElement {

    @track data = [];
    @track draftValues = [];
    @track pages = [];
    @track totalPages = 0;

    pageSize = 10;   // YOU NEEDED 10 PER PAGE
    pageNumber = 1;
    totalRecords = 0;

    columns = [
        { label: 'Name', fieldName: 'Name', editable: true },
        { label: 'Stage', fieldName: 'StageName', editable: true },
        { label: 'Amount', fieldName: 'Amount', type: 'currency', editable: true },
        { label: 'Close Date', fieldName: 'CloseDate', type: 'date', editable: true },
        {
            type: 'action',
            typeAttributes: {
                rowActions: [
                    { label: 'Edit', name: 'edit' },
                    { label: 'Delete', name: 'delete' }
                ]
            }
        }
    ];

    connectedCallback() {
        this.loadData();
    }

    // Generate page numbers like 1 2 3 4...
    generatePages() {
        this.pages = [];
        for (let i = 1; i <= this.totalPages; i++) {
            this.pages.push(i);
        }
    }

    // For underline active page
    get getPageClass() {
        return (this.currentPg === this.pageNumber) ? 'active-page' : '';
    }

    loadData() {
        getTotalCount().then(count => {
            this.totalRecords = count;
            this.totalPages = Math.ceil(count / this.pageSize);
            this.generatePages();
        });

        getOpportunities({
            pageSize: this.pageSize,
            pageNumber: this.pageNumber
        }).then(res => {
            this.data = JSON.parse(JSON.stringify(res));
        });
    }

    handlePageClick(event) {
        this.pageNumber = Number(event.target.dataset.id);
        this.loadData();
    }

    handleNext() {
        if (this.pageNumber < this.totalPages) {
            this.pageNumber++;
            this.loadData();
        }
    }

    handlePrev() {
        if (this.pageNumber > 1) {
            this.pageNumber--;
            this.loadData();
        }
    }

    handleAddRow() {
        const newRow = {
            Id: null,
            Name: '',
            StageName: 'Prospecting',
            Amount: 0,
            CloseDate: new Date().toISOString().slice(0, 10)
        };

        this.data = [newRow, ...this.data];
        this.showToast('Row Added', 'A new row was added.', 'success');
    }

    handleInlineSave(event) {
        this.draftValues = event.detail.draftValues;
        this.handleSave();
    }

    handleSave() {
        saveOpportunities({ oppList: this.draftValues })
            .then(() => {
                this.showToast('Success', 'Records saved successfully', 'success');
                this.draftValues = [];
                this.loadData();
            })
            .catch(error => {
                this.showToast('Error Saving', error.body.message, 'error');
            });
    }

    handleRowAction(event) {
        const action = event.detail.action.name;
        const row = event.detail.row;

        if (action === 'delete') {
            this.deleteRow(row);
        } else if (action === 'edit') {
            this.showToast('Info', 'Use inline editing to edit row.', 'info');
        }
    }

    deleteRow(row) {
        deleteOpportunity({ oppId: row.Id })
            .then(() => {
                this.showToast('Deleted', 'Record deleted successfully', 'success');
                this.loadData();
            })
            .catch(error => {
                this.showToast('Error Deleting', error.body.message, 'error');
            });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }
}
