import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic-Ad]'
})
export class AdDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
