import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent implements OnInit {

  constructor(private tasksService: TasksService) { }
  completedTasks: Task[] = [];

  ngOnInit(): void {    
      
    }
    
    displayCompletedTasks(task: Task) {
      for (let i = 0; i < this.tasksService.finishedTasks.length; i++) {
        task[i].push(this.completedTasks);
      }
  }



}
