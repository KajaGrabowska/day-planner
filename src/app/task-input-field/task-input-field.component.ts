import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-input-field',
  templateUrl: './task-input-field.component.html',
  styleUrls: ['./task-input-field.component.css']
})
export class TaskInputFieldComponent implements OnInit {
  timeSlots = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM','3PM','4PM','5PM','6PM','7PM','8PM', '9PM','10PM'];
  tasks: Task[] = [
    new Task('laundry', 'chores', '6AM') 
  ];
  

  constructor() { }

  ngOnInit(): void {}
    
  onAddTask(form: NgForm) {
    const value = form.value;
    const newTask = new Task(value.name, value.category, value.time);
    this.tasks.push(newTask);
    console.log(this.tasks[1].time);
    let test = this.tasks[1].time;
    let times = (times) => times = this.tasks[1].time;
    let test2 = this.timeSlots.findIndex(times);
    console.log(times);
  }

  
  
  
}
