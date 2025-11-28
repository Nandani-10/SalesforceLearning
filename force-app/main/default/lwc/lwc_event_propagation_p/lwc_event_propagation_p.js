import { LightningElement } from 'lwc';

export default class Lwc_event_propagation_p extends LightningElement {
    msgfromChild;
    constructor(){
        super();
        this.template.addEventListener('evtsubmit', this.sayHello.bind(this));
        this.template.addEventListener('evtbye', this.saybye.bind(this));
    }
    sayHello(event){
        this.msgfromChild=event.detail;
        alert('hello  good morning . This message is in parent component but displayed when child comp button is clicked');
    }
    saybye(event){
        alert('bye  good night . This message is in parent component but displayed when child comp button is clicked');
    }
}