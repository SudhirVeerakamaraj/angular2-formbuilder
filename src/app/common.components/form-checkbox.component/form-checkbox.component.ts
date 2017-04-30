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

import { Observable } from 'rxjs';

@Component({
    selector: 'form-checkbox-group',
    templateUrl: './form-checkbox.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: FormCheckBoxGroupComponent,
        multi: true,
    }],
})
export class FormCheckBoxGroupComponent extends ElementBase<Array<IOption>>  {
    @ViewChild(NgModel) model: NgModel;
    @Input() inputData: ICustomFormControl;
    public DisplayError: Observable<boolean>;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }
    ngOnInit(): void {
        this.CustomErrorMessages = this.inputData.error;
    }

    ngAfterViewInit() {
        // wait a tick first to avoid one-time devMode
        // unidirectional-data-flow-violation error
        setTimeout(() => { this.DisplayError = this.IsDirtyOrTouched && this.invalid }, 0);
    }
    addOrRemoveValue(inputValue: IOption) {
        if (inputValue.isSelected) {
            if (this.value === undefined || this.value === null) {
                this.value = [];
            }
            this.value.push(inputValue);
        } else {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i].value === inputValue.value) {
                    this.value.splice(i, 1);
                    break;
                }
            }
            if (this.value.length === 0) {
                this.value = null;
            }
        }

        this.changed.forEach(f => f(this.value));
    }
    checkboxChangeEvent = (index: number) => {

        // set the current selected to true
        this.inputData.options[index].isSelected = !this.inputData.options[index].isSelected;
        this.addOrRemoveValue(this.inputData.options[index]);
        this.model.control.markAsDirty();
        this.model.control.markAsTouched();
    }
}
