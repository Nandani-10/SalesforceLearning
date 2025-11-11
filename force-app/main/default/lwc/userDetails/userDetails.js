import { LightningElement } from 'lwc';

export default class FormComponent extends LightningElement {
    firstName = '';
    lastName = '';
    email = '';
    phone = '';

    handleChange(event) {
        const field = event.target.name; // safer than dataset.field

        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        } else if (field === 'email') {
            this.email = event.target.value;
        } else if (field === 'phone') {
            this.phone = event.target.value;
        }
    }

    handleSubmit() {
        

        console.log(' Form Submitted!');
        console.log('First Name:', this.firstName);
        console.log('Last Name:', this.lastName);
        console.log('Email:', this.email);
        console.log('Phone Number:', this.phone);
    }
}
