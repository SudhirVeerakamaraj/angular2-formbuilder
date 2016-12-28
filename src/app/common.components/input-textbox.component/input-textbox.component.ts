import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';


@Component({
    selector: 'input-textbox',
    templateUrl: './input-textbox.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputTextboxComponent),
            multi: true
        }
    ]
})

export class InputTextboxComponent implements ControlValueAccessor {
    public textboxValue: string;

    writeValue(value: string) {
        if (value !== undefined) {
            this.textboxValue = value;
        }
    }

    propogateChange = (_: any) => { };

    registerOnChange(fn: any) {
        this.propogateChange = fn;
    }
    registerOnTouched() { }

    update = (value: string) => {
        this.textboxValue = value;
        this.propogateChange(this.textboxValue);
    }

}