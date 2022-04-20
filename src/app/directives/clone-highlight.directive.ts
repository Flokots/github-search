import { HostListener } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCloneHighlight]'
})
export class CloneHighlightDirective {

  constructor(private elem: ElementRef) { 
    this.elem.nativeElement.style.backgroundColor = "#000";
  }

}
