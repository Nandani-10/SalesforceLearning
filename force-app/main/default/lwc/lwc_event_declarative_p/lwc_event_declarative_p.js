import { LightningElement } from 'lwc';

export default class Lwc_event_declarative_p extends LightningElement {

    volume = 0;

    increasetheVol() {
        if (this.volume < 100) {
            this.volume = this.volume + 1;
        }
    }

    decreasetheVol() {
        if (this.volume > 0) {
            this.volume = this.volume - 1;
        }
    }
}
