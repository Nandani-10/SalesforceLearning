import { LightningElement,api,track } from 'lwc';
 
export default class ChildComponentTask extends LightningElement {
    @api name;
    @track isSelected = false;
 
    get buttonLabel() {
        return this.isSelected ? 'Deselect' : 'Select';
    }
 
    get buttonVariant() {
        return this.isSelected ? 'destructive' : 'success';
    }
 
    toggleSelect() {
        this.isSelected = !this.isSelected;
        this.dispatchEvent(new CustomEvent('childtoggle', {
            detail: { name: this.name, selected: this.isSelected },
            bubbles: true,
            composed: true
        }));
    }
 
    @api reset() {
        this.isSelected = false;
    }
}
 