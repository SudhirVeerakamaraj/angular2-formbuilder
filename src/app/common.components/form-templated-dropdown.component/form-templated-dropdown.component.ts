import { Component, ContentChild, TemplateRef, Input, OnInit, Optional, Inject, ViewChild } from "@angular/core";

import { ElementBase } from './../../common-util/element-base';

import { map as _map, find as _find, findWhere as _findWhere } from 'underscore';
import {
    NgModel,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'form-template-dropdown',
    templateUrl: './form-templated-dropdown.component.html',
    styleUrls: ['./form-templated-dropdown.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: FormTemplateDropdownComponent,
        multi: true,
    }],
})


export class FormTemplateDropdownComponent extends ElementBase<IOption>  {
    @ViewChild(NgModel) model: NgModel;
    @ContentChild(TemplateRef) template: TemplateRef<any>;

    @Input() inputData: ICustomFormControl;
    selectedOption: IOption;
    showOptions: boolean;

    private totalNumItem: number;
    public itemIndex: number = 0;
    public DisplayError: Observable<boolean>;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }

    ngOnInit() {
        this.CustomErrorMessages = this.inputData.error;
        this.totalNumItem = this.inputData.options.length;
        this.showOptions = false;
        this.setDefaultSelectedValue();
    }

    ngAfterViewInit() {
        // wait a tick first to avoid one-time devMode
        // unidirectional-data-flow-violation error
        setTimeout(() => { this.DisplayError = this.IsDirtyOrTouched && this.invalid }, 0);
    }

    public onSelect(currentSelectedOption: IOption): void {
        this.selectedOption = currentSelectedOption;
        this.showOptions = !this.showOptions;

        if (this.selectedOption.value) {
            this.selectedOption.isSelected = true;
            this.value = this.selectedOption;
        } else { this.value = null };

        this.changed.forEach(f => f(this.value));
        this.model.control.markAsDirty();
        this.model.control.markAsTouched();
    }

    public displayElClick($event: any): void {

        this.showOptions = !this.showOptions;
    }

    public inputElKeyHandler($event: any): void {
        if ($event.keyCode === 9 && this.showOptions === false) {
            return;
        }

        switch ($event.keyCode) {
            case 27: // ESC, hide auto complete        
                break;

            case 38: // UP, select the previous li el
                this.showOptions = true;
                this.itemIndex = (this.totalNumItem + this.itemIndex - 1) % this.totalNumItem;
                $event.preventDefault();// without this the page will scroll as you move the up and down arrows
                break;

            case 40: // DOWN, select the next li el or the first one
                this.showOptions = true;
                this.itemIndex = (this.totalNumItem + this.itemIndex + 1) % this.totalNumItem;
                $event.preventDefault();
                break;

            case 13: // ENTER, choose it!!
                // this.listElClick(this.selectedItems[this.itemIndex]);
                this.onSelect(this.inputData.options[this.itemIndex]);
                $event.preventDefault();// without this the page will scroll as you move the up and down arrows
                break;
            case 9:// TAB, choose it and close the options
                this.onSelect(this.inputData.options[this.itemIndex]);
                break;
        }
    }

    private setDefaultSelectedValue(): void {
        this.selectedOption = _findWhere(this.inputData.options, { isSelected: true });

        if (!this.selectedOption) {// by default select the first opton
            this.selectedOption = this.inputData.options[0];
        }
    }
}