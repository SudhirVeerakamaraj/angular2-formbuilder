import {Component,NgModule} from '@angular/core'
import { FormsModule,ReactiveFormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import {BasicFormComponent} from './../custom.components/basic-form.component/basic-form.component';
import {FormError} from './../common.components/form-error.component/form-error.component';
import {FormTextComponent} from './../common.components/form-text.component/form-text.component';
import {FormDropdownComponent} from './../common.components/form-dropdown.component/form-dropdown.component';
import {FormRadioButtonComponent} from './../common.components/form-radio.component/form-radio.component';
import {FormToggleComponent} from './../common.components/form-toggle.component/form-toggle.component';

@NgModule({
    imports:[FormsModule,ReactiveFormsModule,CommonModule],    
    exports:[BasicFormComponent,FormTextComponent,FormDropdownComponent,FormRadioButtonComponent,FormToggleComponent,FormError],
    declarations:[BasicFormComponent,FormTextComponent,FormDropdownComponent,FormRadioButtonComponent,FormToggleComponent,FormError]
})

export class WelcomeModule{;}