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
      "author": 'Malcolm X',
      "content": "The future belongs to those who prepare for it today."
    },
    {
      "author": 'Malcolm X',
      "content": "The future belongs to those who prepare for it today."
    },
    {
      "author": 'Malcolm X',
      "content": "The future belongs to those who prepare for it today."
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
