import { LightningElement } from 'lwc';

export default class InputComponent extends LightningElement {
    num1;
    num2;

    handleNum1(event) {
        this.num1 = event.target.value;
    }

    handleNum2(event) {
        this.num2 = event.target.value;
    }

    sendToParent() {
        const eventDetail = {
            num1: this.num1,
            num2: this.num2
        };

        this.dispatchEvent(new CustomEvent('calcsum', { detail: eventDetail }));
    }
}
