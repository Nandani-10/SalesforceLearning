import { LightningElement, track, api } from 'lwc';
 
export default class ParentComponentTask extends LightningElement {
    @track status = { child1: 'Deselected', child2: 'Deselected', child3: 'Deselected' };
    selectedCount = 0;
 
    handleChildToggle(event) {
        const { name, selected } = event.detail;
 
        if (name === 'Child One') this.status.child1 = selected ? 'Selected' : 'Deselected';
        if (name === 'Child Two') this.status.child2 = selected ? 'Selected' : 'Deselected';
        if (name === 'Child Three') this.status.child3 = selected ? 'Selected' : 'Deselected';
 
        this.selectedCount = Object.values(this.status).filter(s => s === 'Selected').length;
        this.dispatchEvent(new CustomEvent('updatecount', { detail: { count: this.selectedCount } }));
    }
 
    @api resetAll() {
        this.status = { child1: 'Deselected', child2: 'Deselected', child3: 'Deselected' };
        this.selectedCount = 0;
 
        this.template.querySelectorAll('c-child-component-task').forEach(child => {
            child.reset();
        });
    }
}
 