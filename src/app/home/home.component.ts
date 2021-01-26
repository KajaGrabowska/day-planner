import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date = new Date();
  timeSlots = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM','3PM','4PM','5PM','6PM','7PM','8PM', '9PM','10PM'];

  constructor() { }

  ngOnInit(): void {
  }

}
