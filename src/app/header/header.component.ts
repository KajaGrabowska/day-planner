import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuoteAPIService } from '../quote-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  date = new Date();
  /* quote = fetch("https://theysaidso.p.rapidapi.com/quote/random?language=en.json").then(function(response) {
    console.log(response);
  }); */
  url = 'https://api.quotable.io/random';
  quotes = [];

    constructor(private http: HttpClient, private QuoteAPIService: QuoteAPIService) { 
      this.http.get(this.url).toPromise().then(data => {
        this.quotes.push(data);
        console.log(this.quotes);
      
        /* for (let key in data) {
          if (data.hasOwnProperty(key))
            this.quotes.push(data[key]);
            console.log(this.quotes);
       }; */
     });
  }

  ngOnInit(): void {
    
  }
  onSaveQuote() {
    for (let i = 0; i < this.quotes.length; i++) {
      this.QuoteAPIService.saveQuote(this.quotes[i]);
    }
    
  }

}
