import { LightningElement } from 'lwc';

export default class Lwc_event_propagation extends LightningElement {
    inputVal;
    subme(event){
        alert('button clicked');
        this.dispatchEvent(new CustomEvent('evtsubmit', {detail:this.inputVal , bubbles:true, composed:true}));
    }
    byeme(event){
        alert('byee button clicked');
        this.dispatchEvent(new CustomEvent('evtbye',{
            bubbles:true, }));
    }
    capmsg(event){
        this.inputVal=event.target.value;
        event.target.value=this.inputVal.toUpperCase();
    }
}