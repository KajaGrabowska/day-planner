import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskInputFieldComponent } from './task-input-field/task-input-field.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskProgressComponent } from './task-progress/task-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskInputFieldComponent,
    TaskListComponent,
    TaskProgressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
