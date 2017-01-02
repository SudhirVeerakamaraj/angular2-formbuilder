import {
    Component,
    Optional,
    Inject,
    Input,
    ViewChild,
    OnInit,
} from '@angular/core';
import {
    NgModel,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';

import { ElementBase } from './../../common-util/element-base';

@Component({
    selector: 'form-dropdown',
    templateUrl: './form-dropdown.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: FormDropdownComponent,
        multi: true,
    }],
})
export class FormDropdownComponent extends ElementBase<string> {
    @ViewChild(NgModel) model: NgModel;
    
    @Input() inputData: ICustomFormControl;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);        
        //this.CustomErrorMessages = this.inputData.error;
    }
    ngOnInit(): void {
        this.CustomErrorMessages = this.inputData.error;

    }

    dropdownValueChange = ($event:any)=>{
        console.log("$event",$event);
    }

}