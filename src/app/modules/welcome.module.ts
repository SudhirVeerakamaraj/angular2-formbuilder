import { Component, NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BasicFormComponent, ComplexFormComponent } from './../custom.components';
import { FormError } from './../common.components/form-error.component/form-error.component';
import { FormTextComponent } from './../common.components/form-text.component/form-text.component';
import { FormDropdownComponent } from './../common.components/form-dropdown.component/form-dropdown.component';
import { FormRadioButtonComponent } from './../common.components/form-radio.component/form-radio.component';
import { FormToggleComponent } from './../common.components/form-toggle.component/form-toggle.component';
import { FormCheckBoxGroupComponent } from './../common.components/form-checkbox.component/form-checkbox.component';
import { FormCheckGroupComponent } from './../common.components/form-checkbox.component/form-checkbox-group';
import { FormAutocompleteComponent } from './../common.components/form-autocomplete.component/form-autocomplete.component';
import { FormTemplateDropdownComponent } from './../common.components/form-templated-dropdown.component/form-templated-dropdown.component';
import { FormTemplatedDropdownGroup } from './../common.components/form-templated-dropdown.component/form-templated-dropdown-group'
import { ModelChangeObservableDirective }
    from './../common.directives/ng-model-change-observable.directive/ng-model-change-observable.directive'

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [BasicFormComponent, ComplexFormComponent, FormTextComponent, FormDropdownComponent,
        FormRadioButtonComponent, FormToggleComponent, FormCheckBoxGroupComponent, FormCheckGroupComponent, FormAutocompleteComponent, FormTemplatedDropdownGroup,
        FormTemplateDropdownComponent,
        FormError],
    declarations: [BasicFormComponent, ComplexFormComponent, FormTextComponent, FormDropdownComponent,
        FormRadioButtonComponent, FormToggleComponent, FormCheckBoxGroupComponent, FormCheckGroupComponent, FormTemplatedDropdownGroup,
        FormAutocompleteComponent, FormError,
        FormTemplateDropdownComponent, ModelChangeObservableDirective]
})

export class WelcomeModule { ; }
