import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AppComponent } from "./app.component";
import { CompletedTasksComponent } from "./completed-tasks/completed-tasks.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { QuoteArchiveComponent } from "./quote-archive/quote-archive.component";


const appRoutes: Routes = [
    { path: '', redirectTo: '/day-planner', pathMatch: 'full' },
    { path: 'day-planner', component: HomeComponent },
    { path: 'day-planner/completed', component: CompletedTasksComponent },
    { path: 'day-planner/quotes', component: QuoteArchiveComponent },
    { path: 'day-planner/about', component: AboutUsComponent },
    { path: 'day-planner/contact', component: ContactUsComponent }     
    ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

