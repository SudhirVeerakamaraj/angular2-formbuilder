import { NgModel } from '@angular/forms';


import { Observable } from 'rxjs';


import { ValueAccessorBase } from './value-accessor-base';


import {
  AsyncValidatorArray,
  ValidatorArray,
  ValidationResult,
  message,
  validate,
  customMessages
} from './validate';


export abstract class ElementBase<T> extends ValueAccessorBase<T> {

  protected abstract model: NgModel;

  protected CustomErrorMessages: ValidationResult;


  set Validators(validatorsArray: ValidatorArray) {
    this.validators = validatorsArray;
  }
  set AsyncValidators(asyncValidatorsArray: AsyncValidatorArray) {
    this.asyncValidators = asyncValidatorsArray;
  }
  // we will ultimately get these arguments from @Inject on the derived class
  constructor(private validators: ValidatorArray,
    private asyncValidators: AsyncValidatorArray
  ) {

    super();
  }


  protected validate(): Observable<ValidationResult> {
    if (this.model) {
      return validate
        (this.validators, this.asyncValidators, this.CustomErrorMessages)
        (this.model.control);
    }
    return null;
  }


  protected get invalid(): Observable<boolean> {

    return this.validate().map(v => Object.keys(v || {}).length > 0);
  }

  protected get IsDirtyOrTouched(): boolean {
    if (this.model) {
      return this.model.dirty || this.model.touched;
    }
  }

  protected get failures(): Observable<Array<string>> {

    return this.validate().map(v => Object.keys(v).map(k => message(v, k)));
  }
}
