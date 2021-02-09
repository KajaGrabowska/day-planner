import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'any'
})
export class TasksService {
  tasks: Task[] = [];
  tasksChanged = new Subject<Task[]>();
  //finishedTasks: Task[] = [];

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

  // completeTask(task: Task) {
  //   for (let i = 0; i < this.tasks.length; i++) {
  //     if (this.tasks[i].time === task.time) {
  //       this.finishedTasks.push(task);
  //     }   
  //   }    
  // }

  // getCompletedTasks() {
  //   return this.finishedTasks;
  // }

  deleteTask(index: number) {
    console.log(index);
    this.tasks.splice(index, 1);
    this.tasksChanged.next(this.tasks.slice());
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

  

  
