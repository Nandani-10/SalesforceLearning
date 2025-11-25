import { LightningElement } from 'lwc';

import AccName from '@salesforce/schema/Account.Name';
import AccPhone from '@salesforce/schema/Account.Phone';
import AccInd from '@salesforce/schema/Account.Industry';
import AccRat from '@salesforce/schema/Account.Rating';

export default class Lds_Form extends LightningElement {

    Name = AccName;
    Phone = AccPhone;
    Industry = AccInd;
    Rating = AccRat;

}
