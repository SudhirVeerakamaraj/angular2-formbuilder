import { Component, OnInit } from '@angular/core'

import { FormTextComponent } from './../../common.components/form-text.component/form-text.component'
import { FormDropdownComponent } from './../../common.components/form-dropdown.component/form-dropdown.component'
import { FormRadioButtonComponent } from './../../common.components/form-radio.component/form-radio.component'


@Component({
    selector: 'basic-form',
    templateUrl: './basic-form.component.html'
})

export class BasicFormComponent implements OnInit {

    public formControls: any;
    constructor() {
        ;
    }

    ngOnInit() {
        this.formControls = {
            inputTextbox: {
                id: "sampleInput",
                label: "Simple textbox",
                value: "some Predefined value",
                isRequired: true,
                minlength: 0,
                maxlength: 255,
                placeholder: "some placeholder",
                error: {
                    required: "Please enter this field",
                    minlength: "this field should have atleast 2 characters",
                    maxlength: "this field can have a max length of 10 character"
                }
            },
            inputDropdown: {
                id: "sampleDropdown",
                label: "Simple dropdown",
                value: "",
                isRequired: true,
                minlength: null,
                maxlength: null,
                placeholder: "",
                error: {
                    required: "Please select a value"                   
                },
                options:[{
                    value:"",
                    text:"Select",
                    isSelected:true
                },
                {
                    value:"1",
                    text:"Apples",
                    isSelected:false
                },
                {
                    value:"2",
                    text:"Oranges",
                    isSelected:false
                },
                {
                    value:"3",
                    text:"Peaches",
                    isSelected:false
                }]
            },
            inputRadioGroup:{
                id: "simpleRadioGroup",
                label: "Simple radio group",
                value: null,
                isRequired: true,
                minlength: null,
                maxlength: null,
                placeholder: "some placeholder",
                error: {
                    required: "Please select one - radio"
                },
                options:[
                {
                    value:"1",
                    text:"Apples",
                    isSelected:false
                },
                {
                    value:"2",
                    text:"Oranges",
                    isSelected:false
                },
                {
                    value:"3",
                    text:"Peaches",
                    isSelected:false
                }]
            },
            inputToggleGroup:{
                id: "simpleToggleGroup",
                label: "Toggle group",
                value: "1",
                isRequired: true,
                minlength: null,
                maxlength: null,
                placeholder: "some placeholder",
                error: {
                    required: "Please select one - toggle",
                },
                options:[
                {
                    value:"1",
                    text:"Apples",
                    isSelected:true
                },
                {
                    value:"2",
                    text:"Oranges",
                    isSelected:false
                },
                {
                    value:"3",
                    text:"Peaches",
                    isSelected:false
                }]
            }
        };
    }

    onSubmit = function () {
        return false;
    }
}