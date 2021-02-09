import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskInputFieldComponent } from './task-input-field/task-input-field.component';
import { TaskListComponent } from './task-input-field/task-list/task-list.component';
import { TaskProgressComponent } from './task-progress/task-progress.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { QuoteArchiveComponent } from './quote-archive/quote-archive.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { HomeComponent } from './home/home.component';

import { TasksService } from './tasks.service';
import { QuoteAPIService } from './quote-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskInputFieldComponent,
    TaskListComponent,
    TaskProgressComponent,
    NavBarComponent,
    CompletedTasksComponent,
    QuoteArchiveComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TasksService, QuoteAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
