import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMouseInteraction]'
})
export class MouseInteractionDirective {
  @Input('studentDetail') private score :any;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(this.el.nativeElement)
    // this.renderer.setStyle(this.el.nativeElement, 'background', 'red')
  }

  @HostListener('mouseenter')onMouseEnter(){
    console.log('Mouse entering to TR', this.score)
  }

  @HostListener('mouseleave')onMouseleave(){
    console.log('Mouse leaving to TR', this.score)
  }

}
