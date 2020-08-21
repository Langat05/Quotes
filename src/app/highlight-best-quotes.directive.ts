import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightBestQuotes]'
})
export class HighlightBestQuotesDirective {

  constructor(private elem: ElementRef) {}
  @HostListener("click") findMostLiked(){
    this.color("highlight")
  }

  private color(action:string){
    this.elem.nativeElement.style.color = action;


  }

}