// import { LightningElement } from 'lwc';

// export default class FormComponent extends LightningElement {
//     firstName = '';
//     lastName = '';
//     email = '';
//     phone = '';

//     handleChange(event) {
//         const field = event.target.name; // safer than dataset.field

//         if (field === 'firstName') {
//             this.firstName = event.target.value;
//         } else if (field === 'lastName') {
//             this.lastName = event.target.value;
//         } else if (field === 'email') {
//             this.email = event.target.value;
//         } else if (field === 'phone') {
//             this.phone = event.target.value;
//         }
//     }

//     handleSubmit() {
        

//         console.log(' Form Submitted!');
//         console.log('First Name:', this.firstName);
//         console.log('Last Name:', this.lastName);
//         console.log('Email:', this.email);
//         console.log('Phone Number:', this.phone);
//     }
// }



import { LightningElement } from 'lwc';

export default class FormComponent extends LightningElement {
handleChange(event) {
    // If you need live logs while typing
    console.log(event.target.name + ' : ' + event.target.value);
}

handleSubmit() {

    let formData = {};

    this.template.querySelectorAll('lightning-input').forEach(input => {
        formData[input.name] = input.value;
    });

    console.log('Form Submitted!');
    console.log(JSON.stringify(formData, null, 2));    
}


}
