import { LightningElement, track } from 'lwc';
 
export default class GrandParentComponentTask extends LightningElement {
 
 
    @track selectedCount = 0;
 
    handleUpdateCount(event) {
        this.selectedCount = event.detail.count;
    }
 
    handleReset() {
        this.selectedCount = 0;
        this.template.querySelector('c-parent-component-task').resetAll();
    }
}