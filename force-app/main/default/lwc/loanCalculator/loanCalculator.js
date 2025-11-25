import { LightningElement } from 'lwc';

export default class LoanCalculator extends LightningElement {

    loanAmount;
    interest;
    tenure;
    emi;
    dataArray = [
        { id: 1, name: 'Item One', value: 'Value One' },
        { id: 2, name: 'Item Two', value: 'Value Two' },
        { id: 3, name: 'Item Three', value: 'Value Three' }
    ];

    handleLoanAmount(event){
        this.loanAmount = parseFloat(event.target.value);
    }

    handleInterest(event){
        this.interest = parseFloat(event.target.value);
    }

    handleTenure(event){
        this.tenure = parseInt(event.target.value);
    }

    calculateEMI(){
        let P = this.loanAmount;
        let annualRate = this.interest;
        let years = this.tenure;

        let R = annualRate / 12 / 100;   // monthly interest rate
        let N = years * 12;              // months

        let emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

        this.emi = emiValue.toFixed(2);
    }
}
