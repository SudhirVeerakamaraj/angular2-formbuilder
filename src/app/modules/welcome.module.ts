import {Component,NgModule} from '@angular/core'
import { FormsModule,ReactiveFormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import {BasicFormComponent} from './../custom.components/basic-form.component/basic-form.component';
import {FormError} from './../common.components/form-error.component/form-error.component';
import {FormTextComponent} from './../common.components/form-text.component/form-text.component';
import {FormDropdownComponent} from './../common.components/form-dropdown.component/form-dropdown.component';
import {FormRadioButtonComponent} from './../common.components/form-radio.component/form-radio.component';
import {FormToggleComponent} from './../common.components/form-toggle.component/form-toggle.component';
import {FormCheckBoxGroupComponent} from './../common.components/form-checkbox.component/form-checkbox.component';
import {FormCheckGroupComponent} from './../common.components/form-checkbox.component/form-checkbox-group';
import {FormAutocompleteComponent} from './../common.components/form-autocomplete.component/form-autocomplete.component';
import {ModelChangeObservableDirective} from './../common.directives/ng-model-change-observable.directive/ng-model-change-observable.directive'


@NgModule({
    imports:[FormsModule,ReactiveFormsModule,CommonModule],    
    exports:[BasicFormComponent,FormTextComponent,FormDropdownComponent,FormRadioButtonComponent,FormToggleComponent,FormCheckBoxGroupComponent,FormCheckGroupComponent,FormAutocompleteComponent,FormError],
    declarations:[BasicFormComponent,FormTextComponent,FormDropdownComponent,FormRadioButtonComponent,FormToggleComponent,FormCheckBoxGroupComponent,FormCheckGroupComponent,FormAutocompleteComponent,FormError,ModelChangeObservableDirective]
})

export class WelcomeModule{;}