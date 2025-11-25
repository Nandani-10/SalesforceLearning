import { LightningElement } from 'lwc';

export default class SumParent extends LightningElement {
    result = 0;

    handleCalc(event) {
        const { num1, num2 } = event.detail;
        this.result = parseInt(num1) + parseInt(num2);
    }
}
 