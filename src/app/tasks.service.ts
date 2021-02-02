import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [];

  constructor(private http: HttpClient) { }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  setTasks(tasks: Task[]) {
    this.tasks = tasks;
  }

  saveTasks() {
    const tasks = this.tasks;
    this.http
      .put('https://day-planner-3418f-default-rtdb.firebaseio.com/tasks.json',
      tasks).subscribe(response => {
        console.log(response);
      });
  }

  fetchTasks() {
    this.http
      .get<Task[]>('https://day-planner-3418f-default-rtdb.firebaseio.com/tasks.json'
      )
      .pipe(
        map(tasks => {
          return tasks.map(task => {
            return {
              ...task
            };  
          });
        }),
        tap(tasks => {
          this.setTasks(tasks);
        })
      )
  }
    
  }

  

  
