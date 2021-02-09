import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks.service';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  //@Input() fromParent: Task[];
  tasks: Task[] = [];
  index: number;

  
   

  constructor(private tasksService: TasksService ) { }

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
  }

  // onCompleteTask(task: Task) {
  //   this.tasksService.completeTask(task);
  // }

  onDeleteTask(index: number) {
    this.tasksService.deleteTask(index);
  }


  
  /* ngOnChanges() { // this will be called automatically when updated by parent.
      console.log(this.fromParent);
  } */

}
