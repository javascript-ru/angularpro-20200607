import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[delay]',
})
export class DelayDirective {

  @Input() delay;

  constructor(
    public view: ViewContainerRef,
    private template: TemplateRef<HTMLElement>
  ) {}

  ngOnInit() {
    setTimeout((_) => {
      this.view.createEmbeddedView(this.template);
    }, this.delay);
  }
}
