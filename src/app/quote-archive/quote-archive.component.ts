import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-archive',
  templateUrl: './quote-archive.component.html',
  styleUrls: ['./quote-archive.component.scss']
})
export class QuoteArchiveComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }



}
