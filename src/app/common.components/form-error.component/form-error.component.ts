import {Component,Input, OnChanges} from '@angular/core';

@Component({
    templateUrl:'./form-error.component.html',
      selector: 'validation-messages',
      styleUrls:['./form-error.component.css']
})

export class FormError
{
    @Input() messages:Array<string>;    
}