import {
    Component,
    Optional,
    Inject,
    Input,
    ViewChild,
    OnInit,
    AfterViewInit
} from '@angular/core';
import {
    NgModel,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';

import { ElementBase } from './../../common-util/element-base';
import {Observable} from 'rxjs';

@Component({
    selector: 'form-radio',
    templateUrl: './form-radio.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: FormRadioButtonComponent,
        multi: true,
    }],
})
export class FormRadioButtonComponent extends ElementBase<string> implements AfterViewInit  {
    @ViewChild(NgModel) model: NgModel;

    @Input() inputData: ICustomFormControl;

    public DisplayError: Observable<boolean>;

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
    //
ngAfterViewInit() {
    // wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.DisplayError = this.IsDirtyOrTouched && this.invalid, 0);
  }
}