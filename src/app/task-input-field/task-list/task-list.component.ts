import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks.service';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  //@Input() fromParent: Task[];
  tasks: Task[] = [];

  
   

  constructor(private tasksService: TasksService ) { }

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
  }


  
  /* ngOnChanges() { // this will be called automatically when updated by parent.
      console.log(this.fromParent);
  } */

}
