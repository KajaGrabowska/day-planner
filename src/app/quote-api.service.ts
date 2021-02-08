import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class QuoteAPIService {
  quotes = [];

  constructor() { }


  saveQuote(quoteToSave: Object) {
    this.quotes.push(quoteToSave);
  }

  displayQuotes() {
    return this.quotes;
  }
}


