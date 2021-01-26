import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  date = new Date();
  /* quote = fetch("https://theysaidso.p.rapidapi.com/quote/random?language=en.json").then(function(response) {
    console.log(response);
  }); */
  url = 'https://api.quotable.io/random';
  quotes = [];

    constructor(private http: HttpClient) { 
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

}
