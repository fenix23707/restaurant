import {Directive, DoCheck, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[trackBy]'
})
export class TrackByDirective implements DoCheck {

  @Input('trackBy') target: any;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

  ngDoCheck(): void {
    this.viewContainer.clear()
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

}
