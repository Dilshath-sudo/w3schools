import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  @Input() appColor: string;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.color = this.appColor;
  }

}
