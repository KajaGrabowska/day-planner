import { Component, OnInit } from '@angular/core';
import { QuoteAPIService } from '../quote-api.service';

@Component({
  selector: 'app-quote-archive',
  templateUrl: './quote-archive.component.html',
  styleUrls: ['./quote-archive.component.scss']
})
export class QuoteArchiveComponent implements OnInit {
  savedQuotes = [];
  quotes = [
    {
      "author": 'Malcolm X',
      "content": "The future belongs to those who prepare for it today."
    },
    {
      "author": 'Buddha',
      "content": "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared."
    },
    {
      "author": 'Eleanor Roosevelt',
      "content": "With the new day comes new strength and new thoughts."
    },
    {
      "author": 'Albert Einstein',
      "content": "A man should look for what is, and not for what he thinks should be."
    }
  ];

  constructor(private quoteAPIService: QuoteAPIService) {
    this.savedQuotes = this.quoteAPIService.displayQuotes();
    for (let i = 0; i < this.savedQuotes.length; i++) {
      this.quotes.push(this.savedQuotes[i]);
    }
    
   }

  ngOnInit(): void {
  }



}
