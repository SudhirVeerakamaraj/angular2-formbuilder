import { Component, OnInit } from '@angular/core'

import { Router } from '@angular/router';

@Component({
    selector: 'basic-form',
    templateUrl: './basic-form.component.html'
})

export class BasicFormComponent implements OnInit {

    public formControls: any;
    constructor(private router: Router) {
        ;
    }

    ngOnInit() {
        this.formControls = {
            inputTextbox: {
                id: 'sampleInput',
                label: 'Simple textbox',
                value: 'some Predefined value',
                isRequired: true,
                minlength: 0,
                maxlength: 255,
                placeholder: 'some placeholder',
                error: {
                    required: 'Please enter this field',
                    minlength: 'this field should have atleast 2 characters',
                    maxlength: 'this field can have a max length of 10 character'
                }
            },
            inputDropdown: {
                id: 'sampleDropdown',
                label: 'Simple dropdown',
                value: '',
                isRequired: true,
                minlength: null,
                maxlength: null,
                placeholder: '',
                error: {
                    required: 'Please select a value'
                },
                options: [{
                    value: '',
                    text: 'Select',
                    isSelected: true
                },
                {
                    value: '1',
                    text: 'Apples',
                    isSelected: false
                },
                {
                    value: '2',
                    text: 'Oranges',
                    isSelected: false
                },
                {
                    value: '3',
                    text: 'Peaches',
                    isSelected: false
                }]
            },
            inputRadioGroup: {
                id: 'simpleRadioGroup',
                label: 'Simple radio group',
                value: null,
                isRequired: true,
                minlength: null,
                maxlength: null,
                placeholder: 'some placeholder',
                error: {
                    required: 'Please select one - radio'
                },
                options: [
                    {
                        value: '1',
                        text: 'Apples',
                        isSelected: false
                    },
                    {
                        value: '2',
                        text: 'Oranges',
                        isSelected: false
                    },
                    {
                        value: '3',
                        text: 'Peaches',
                        isSelected: false
                    }]
            },
            inputToggleGroup: {
                id: 'simpleToggleGroup',
                label: 'Toggle group',
                value: '1',
                isRequired: true,
                minlength: null,
                maxlength: null,
                placeholder: 'some placeholder',
                error: {
                    required: 'Please select one - toggle',
                },
                options: [
                    {
                        value: '1',
                        text: 'Apples',
                        isSelected: true
                    },
                    {
                        value: '2',
                        text: 'Oranges',
                        isSelected: false
                    },
                    {
                        value: '3',
                        text: 'Peaches',
                        isSelected: false
                    }]
            },
            inputCheckboxGroup: {
                id: 'simpleCheckboxGroup',
                label: 'Simple checkbox group',
                value: null,
                isRequired: true,
                minlength: null,
                maxlength: null,
                placeholder: 'some placeholder',
                error: {
                    required: 'Please select one - radio'
                },
                options: [
                    {
                        value: '1',
                        text: 'Apples',
                        isSelected: false
                    },
                    {
                        value: '2',
                        text: 'Oranges',
                        isSelected: false
                    },
                    {
                        value: '3',
                        text: 'Peaches',
                        isSelected: false
                    }]
            },
            inputAutocomplete: {
                id: 'autocomplete',
                label: 'Auto complete textbox',
                value: '',
                isRequired: true,
                minlength: 0,
                maxlength: 255,
                placeholder: 'some placeholder',
                error: {
                    required: 'Please enter this field',
                    minlength: 'this field should have atleast 2 characters',
                    maxlength: 'this field can have a max length of 10 character'
                }
            },
        };
    }

    onSubmit() {
        this.router.navigate(['/complexform']);
    }
}
