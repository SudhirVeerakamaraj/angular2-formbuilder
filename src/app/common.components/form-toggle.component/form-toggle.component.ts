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
    selector: 'form-toggle',
    templateUrl: './form-toggle.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: FormToggleComponent,
        multi: true,
    }],
})
export class FormToggleComponent extends ElementBase<string> implements AfterViewInit {
    @ViewChild(NgModel) model: NgModel;

    @Input() inputData: ICustomFormControl;

    public DisplayError: Observable<boolean>;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
        // this.CustomErrorMessages = this.inputData.error;

    }
    ngOnInit(): void {
        this.CustomErrorMessages = this.inputData.error;

    }

    toggleChangeEvent = (index: number) => {

        // change the current selected to false
        for (let i = 0; i < this.inputData.options.length; i++) {
            if (this.inputData.options[i].isSelected) {
                this.inputData.options[i].isSelected = false;
                break;
            }
        }

        // set the current selected to true
        this.inputData.options[index].isSelected = true;
    }
    //
    ngAfterViewInit() {
        // wait a tick first to avoid one-time devMode
        // unidirectional-data-flow-violation error
        setTimeout(() => this.DisplayError = this.IsDirtyOrTouched && this.invalid, 0);
    }

}
