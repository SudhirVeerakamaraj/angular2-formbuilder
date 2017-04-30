import { Component, OnInit } from '@angular/core'


@Component({
    selector: 'complex-form',
    templateUrl: './complex-form.component.html'
})

export class ComplexFormComponent implements OnInit {

    public formControls: any;
    constructor() {
        ;
    }

    ngOnInit() {
        this.formControls = {
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
            inputTemplateDropdwon: {
                id: 'inputTemplateDropdwon',
                label: 'Template Dropdown',
                value: null,
                isRequired: true,
                minlength: null,
                maxlength: null,
                placeholder: 'some placeholder',
                error: {
                    required: 'Please select one - template dropdown'
                },
                options: [
                    {
                        value: null,
                        text: {
                            iconClass: null,
                            description: '-- Please select a value --'
                        },
                        isSelected: false
                    },
                    {
                        value: '1',
                        text: {
                            iconClass: 'glyphicon-play-circle',
                            description: 'Play Circle'
                        },
                        isSelected: false
                    },
                    {
                        value: '2',
                        text: {
                            iconClass: 'glyphicon-repeat',
                            description: 'Repeat'
                        },
                        isSelected: false
                    },
                    {
                        value: '3',
                        text: {
                            iconClass: 'glyphicon-refresh',
                            description: 'Refresh'
                        },
                        isSelected: false
                    }]
            }
        };
    }

    onSubmit = function () {
        return false;
    }
}
