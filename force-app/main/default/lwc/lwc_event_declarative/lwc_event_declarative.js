import { LightningElement } from 'lwc';

export default class Lwc_event_declarative extends LightningElement {

    increme() {
        this.dispatchEvent(new CustomEvent('eventinc'));
        
    }

    decreme() {
        this.dispatchEvent(new CustomEvent('eventdec'));
    }
}
