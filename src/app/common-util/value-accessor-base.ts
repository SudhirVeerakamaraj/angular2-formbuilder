import { ControlValueAccessor } from '@angular/forms';

export class ValueAccessorBase<T> implements ControlValueAccessor {
    private controlValue: T;
    public changed = new Array<(value: T) => void>();

    private touched = new Array<() => void>();

    get value(): T {
        return this.controlValue;
    }

    set value(value: T) {
        if (this.controlValue !== value) {
            this.controlValue = value;
            this.changed.forEach(f => f(value));
        }
    }

    touch() {
        this.touched.forEach(f => f());
    }

    writeValue(value: T) {
        this.controlValue = value;
    }

    registerOnChange(fn: (value: T) => void) {
        this.changed.push(fn);
    }

    registerOnTouched(fn: () => void) {
        this.touched.push(fn);
    }

}
