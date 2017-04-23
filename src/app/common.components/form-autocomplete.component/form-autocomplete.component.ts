import {
    Component,
    Optional,
    Inject,
    Input,
    ViewChild,
    OnInit,
    EventEmitter
} from '@angular/core';
import {
    NgModel,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    NG_ASYNC_VALIDATORS,
    AbstractControl
} from '@angular/forms';

import { Observable } from 'rxjs';
import * as Rx from 'rxjs/Rx'

import { ElementBase } from './../../common-util/element-base';

@Component({
    selector: 'form-autocomplete',
    templateUrl: './form-autocomplete.component.html',
    styleUrls: ['./form-autocomplete.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: FormAutocompleteComponent,
        multi: true,
    }],
})
export class FormAutocompleteComponent extends ElementBase<string> {
    @ViewChild(NgModel) model: NgModel;

    @Input() inputData: ICustomFormControl;
    @Input() allowListValueOnly: boolean;

    public getAucompleteValues: EventEmitter<string> = new EventEmitter<string>();

    public selectedItems: Array<string> = [];
    public itemIndex: number = 0;

    private hasSelected: boolean = false;
    private allCountries: Array<string> = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];
    private observableOfContries: Observable<Array<string>>;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
        //this.CustomErrorMessages = this.inputData.error;
        this.getAucompleteValues.filter((text: string) => text.length > 2)
            .debounceTime(300)
            .subscribe((countryName: string) => {
                let query = new RegExp(countryName, 'ig');
                this.itemIndex = 0;
                this.hasSelected = false;
                this.selectedItems = this.allCountries.filter((country: string) => {
                    return query.test(country)
                })
            });
        this.getAucompleteValues.filter((text: string) => text.length <= 2)
            .debounceTime(300)
            .subscribe((countryName: string) => {

                this.selectedItems = [];
            });
    }
    ngOnInit(): void {
        this.setInitialOptions();
        this.CustomErrorMessages = this.inputData.error;
        this.observableOfContries = Rx.Observable.of(this.allCountries);
    }

    private setInitialOptions(): void {
        if (this.allowListValueOnly === undefined) {
            this.allowListValueOnly = true;
        }
    }

    public blur($event: any): void {
        setTimeout(() => { // this timeout because blur fires before select
            this.cleanUpWhileLeavingInputEl();
        }, 600);
    }

    private cleanUpWhileLeavingInputEl(): void {
        this.selectedItems = [];
        if (this.allowListValueOnly && this.hasSelected == false) {
            this.inputData.value = "";
        }
    }
    public listElClick(item: any) {
        this.hasSelected = true;
        this.inputData.value = item;
        this.selectedItems = [];
    }
    public inputElKeyHandler($event: any): void {
        let totalNumItem = this.selectedItems.length;

        switch ($event.keyCode) {
            case 27: // ESC, hide auto complete        
                break;

            case 38: // UP, select the previous li el
                this.itemIndex = (totalNumItem + this.itemIndex - 1) % totalNumItem;
                break;

            case 40: // DOWN, select the next li el or the first one

                this.itemIndex = (totalNumItem + this.itemIndex + 1) % totalNumItem;
                break;

            case 13: // ENTER, choose it!!
                this.listElClick(this.selectedItems[this.itemIndex]);
                $event.preventDefault();
                break;
            case 9:// TAB, choose it and close the options
                this.listElClick(this.selectedItems[this.itemIndex]);
                this.cleanUpWhileLeavingInputEl();
                break;
        }
    };
}
