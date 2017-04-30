import { Directive, Input, EventEmitter, HostListener } from '@angular/core'

@Directive({
    selector: '[ngModelChangeObservable]'
})
export class ModelChangeObservableDirective {

    @Input('ngModelChangeObservable')
    public ngModelChangeEmitter: EventEmitter<any>

    @HostListener('ngModelChange', ['$event']) onModelChange(event: any) {
        if (this.ngModelChangeEmitter) {
            this.ngModelChangeEmitter.next(event)
        }
    }

}
