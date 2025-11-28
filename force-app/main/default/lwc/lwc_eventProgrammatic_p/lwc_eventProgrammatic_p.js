import { LightningElement } from 'lwc';

export default class Lwc_eventProgrammatic_p extends LightningElement {
    constructor(){
        super();
        this.template.addEventListener('increme', this.VolumeIncrease.bind(this));
        this.template.addEventListener('decreme', this.VolumeDecrease.bind(this));
    }
    VolumeIncrease(event){
        alert('Event handled in parent component. Message from child: '+ event.detail);
    }
    VolumeDecrease(event){
        alert('Event handled in parent component. Message from child: '+ event.detail);
    }
}