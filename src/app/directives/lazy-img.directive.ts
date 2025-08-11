import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLazyImg]'
})
export class LazyImgDirective implements OnInit {
  @Input() appLazyImg!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const obs = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting) {
        this.renderer.setAttribute(this.el.nativeElement, 'src', this.appLazyImg);
        observer.unobserve(entry.target);
      }
    });
    obs.observe(this.el.nativeElement);
  }
}
