import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  //@Input() fromParent: Task[];
  tasks: Task[] = [
    new Task('laundry', 'chores', '6AM'),
    new Task('Walk the dog', 'errands', '8AM'),
    new Task('Make dinner', 'chores', '8PM')
  ];



  

  constructor() { }

  ngOnInit(): void {   
  }
  
  /* ngOnChanges() { // this will be called automatically when updated by parent.
      console.log(this.fromParent);
  } */

}
