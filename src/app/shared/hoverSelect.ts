import { Directive, OnInit, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]' // how to add the selector/directive 
})
export class HoverDirective implements OnInit{
  open: boolean = false;
  constructor(private eleref: ElementRef, private renderer: Renderer2 ) { } // where = eleref, with what = renderer

  ngOnInit(){
  }
  @HostListener('mouseover') mouseover(input){
      this.renderer.addClass(this.eleref.nativeElement.firstChild,"list-group-item-dark");
  }
  @HostListener('mouseleave') mouseout(input){
    this.renderer.removeClass(this.eleref.nativeElement.firstChild,"list-group-item-dark");
  }
}

