import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

interface WhileContext {
  $implicit: any,
}

@Directive({
  selector: '[while]'
})
export class WhileDirective {

  constructor(private templateRef: TemplateRef<WhileContext>, private viewContainer: ViewContainerRef) {
  }

  @Input('while') set appWhile(array: any[]) {
    this.viewContainer.clear();
    array.forEach(value => {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: value
      });
    })
  }
}
