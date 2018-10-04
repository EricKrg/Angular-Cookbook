import { Directive, OnInit, ElementRef, Renderer, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]' // how to add the selector/directive 
})
export class DropdownDirective implements OnInit{
  open: boolean = false;
  constructor(private eleref: ElementRef, private renderer: Renderer2 ) { } // where = eleref, with what = renderer

  ngOnInit(){
  }
  @HostListener('click') mouseover(input){
    if(this.open){
      this.renderer.removeClass(this.eleref.nativeElement.nextElementSibling,"show");
    } else {
      this.renderer.addClass(this.eleref.nativeElement.nextElementSibling,"show");
    }
    this.open === true ? this.open =false : this.open = true;
  }

}
