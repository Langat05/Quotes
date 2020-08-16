import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightBestQuotes]'
})
export class HighlightBestQuotesDirective {

  constructor(private elem:ElementRef){

    this.elem.nativeElement.style.color="blue"

    
   }

}