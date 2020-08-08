import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'I am a slow walker but i never walk backwards.','Written by Langat'),
    new Quote(2, 'Make a hey when the sun shines.', 'Written by Lekiko'),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}