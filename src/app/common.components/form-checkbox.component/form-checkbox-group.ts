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
    selector: 'checkbox-group',
    template: '<ng-content></ng-content>',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: FormCheckGroupComponent,
        multi: true,
    }],
})
export class FormCheckGroupComponent extends ElementBase<Array<IOption>>  {
    @ViewChild(NgModel) model: NgModel;
}
