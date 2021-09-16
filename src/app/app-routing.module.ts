import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Component for Routing */
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AboutComponent } from "./about/about.component";
import { JobdetailsComponent} from "./jobdetails/jobdetails.component";
import { JoblistingComponent } from "./joblisting/joblisting.component";
import { DashboardProfileComponent } from "./dashboard-profile/dashboard-profile.component";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { JobproposalComponent} from "./jobproposal/jobproposal.component";
import { Page404Component} from "./page404/page404.component"

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent},
  { path: 'details', component: JobdetailsComponent},
  { path: 'job', component: JoblistingComponent},
  { path: 'profile', component: DashboardProfileComponent},
  { path: 'user-dashboard', component: UserDashboardComponent},
  { path: 'jobproposal', component: JobproposalComponent}
  

];

//Wild Card Route for 404 request
{ path: '**', pathMatch: 'full', 
component: Page404Component },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponent = [LoginComponent, RegisterComponent, HomeComponent, AboutComponent, JoblistingComponent, DashboardProfileComponent, JobproposalComponent, UserDashboardComponent, JobdetailsComponent, Page404Component]
