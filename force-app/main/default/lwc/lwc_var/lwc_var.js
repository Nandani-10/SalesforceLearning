import { LightningElement } from 'lwc';

export default class Lwc_var extends LightningElement {
    name = 'Nandani';
    age= 22;
    email ="nandanivyas10052002@gmail.com"
    num=387;
    num1; num2; num3;
        moreDetail={
        city:'Hyderabad',
        state:'Telangana',
        country:'India'}
    submit(event){
        this.name = 'Nandani Vyas';
        this.age= 325;
        this.email ="nandanivyas8919@gmail.com"
        alert('The number is : '+this.num);


}
clickme(event){
    this.num= event.target.value;
}
findGreatest(event){
    if(event.target.name === 'num1'){
        this.num1 = parseInt(event.target.value);
    }
    else if(event.target.name === 'num2'){
        this.num2 = parseInt(event.target.value);
    }
    else if(event.target.name === 'num3'){
        this.num3 = parseInt(event.target.value);
    }

    if(this.num1 >= this.num2 && this.num1 >= this.num3){
        alert('Number 1 is greatest : ' + this.num1);
    }
    else if(this.num2 >= this.num1 && this.num2 >= this.num3){
        alert('Number 2 is greatest : ' + this.num2);
    }
    else{
        alert('Number 3 is greatest : ' + this.num3);
    }
}

}
