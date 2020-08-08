import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    {id:1, name: 'I am a slow walker but i never walk backwards.',description: 'Written by Langat'},
    {id:2, name: 'Make a hey when the sun shines.', description:'Written by Lekiko'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
