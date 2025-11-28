import { LightningElement } from 'lwc';

export default class Lwc_eventProgrammatic_c extends LightningElement {
    counter=0;
    increme(event){
        this.counter++;
        this.dispatchEvent(new CustomEvent('increme', {detail:this.counter , bubbles:true, composed:true}));
    }
    decreme(event){
        this.counter--;
        this.dispatchEvent(new CustomEvent('decreme', {detail:this.counter , bubbles:true, composed:true}));
    }
}