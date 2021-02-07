import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-input-field',
  templateUrl: './task-input-field.component.html',
  styleUrls: ['./task-input-field.component.scss']
})
export class TaskInputFieldComponent implements OnInit {
  timeSlots = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM','3PM','4PM','5PM','6PM','7PM','8PM', '9PM','10PM'];
  // timeSlots = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00','15:00','16:00','17:00','18:00','19:00','20:00', '21:00','20:00'];
  // tasks: Task[] = [
  //   new Task('laundry', 'chores', '9:00') 
  
  // ];
  

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {}
    
  onAddTask(form: NgForm) {
    const value = form.value;
    const newTask = new Task(value.name, value.category, value.time);
    //newTask.setID(); 
    this.tasksService.addTask(newTask);
    this.tasksService.saveTasks();
    //this.tasks.sort((a, b) => (a.id > b.id) ? 1 : -1)

    console.log(this.tasksService.tasks);

    // console.log(this.tasks[1].time);
    // let test = this.tasks[1].time;
    // let times = (times) => times = this.tasks[1].time;
    // let test2 = this.timeSlots.findIndex(times);
    // console.log(times);
  }

  
  
  
}
