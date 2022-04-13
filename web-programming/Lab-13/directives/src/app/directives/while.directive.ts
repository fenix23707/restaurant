import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

interface WhileContext {
  $implicit: any,
  index: number
}

@Directive({
  selector: '[while]'
})
export class WhileDirective {

  constructor(private templateRef: TemplateRef<WhileContext>, private viewContainer: ViewContainerRef) {
  }

  @Input('while') set appWhile(array: any[]) {
    this.viewContainer.clear();
    array.forEach((value, index, array) => {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: value,
        index
      });
    })
  }
}
