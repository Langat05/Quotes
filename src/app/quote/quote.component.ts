import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Do not withhold good from those to whom it is due, when it is in your power to do it.', 'Paul, proverbs 3:27', 0, 0, new Date(1014, 11, 14)),
    new Quote(2, 'Nobody can stop reggae.', 'Lucky Dube', 0, 0, new Date(2004, 6, 19)),
  ];


  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  clickCounter = 0;
  dislikeCounter = 0;
  highestCounter = 0;
  bestQuote: string;

  findMostLiked() {
    this.highestCounter = 0;
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].clickCounter > this.highestCounter) {
        this.highestCounter = this.quotes[i].clickCounter;
        this.dislikeCounter = this.quotes[i].dislikeCounter;
        this.bestQuote = this.quotes[i].name;
      }

    }
  }


  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  countClick(quote) {
    quote.clickCounter = quote.clickCounter + 1;

  }
  countDislike(quote) {
    quote.dislikeCounter = quote.dislikeCounter + 1;
  }

  constructor() { }

  ngOnInit() {
  }

}