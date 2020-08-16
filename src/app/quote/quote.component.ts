import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'I am a slow walker but i never walk backwards', 'Langat', new Date(2014, 11, 14)),
    new Quote(2, 'Make a hey when the sun shines', 'Lekiko', new Date(2019, 1, 24)),
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  clickCounter = 0;
  dislikeCounter = 0;
  highestCounter=0;
  bestQuote:string;

  findMostLiked(){
    this.highestCounter=0;
    for(let i=0 ;i < this.quotes.length;i++){
      if(this.quotes[i].clickCounter >this.highestCounter){
        this.highestCounter=this.quotes[i].clickCounter;
        this.dislikeCounter=this.quotes[i].dislikeCounter;
        this.bestQuote=this.quotes[i].name;
      }

    }
  }
  countClick(quote) {
    quote.clickCounter = quote.clickCounter +1;

  }
  countDislike(quote) {
    quote.dislikeCounter = quote.dislikeCounter +1;
  }

  constructor() { }


  ngOnInit() {
  }

}

 

 
  

  
  
  
  
