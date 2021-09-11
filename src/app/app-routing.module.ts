import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Component for Routing */
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AboutComponent } from "./about/about.component";
import { DashboardProfileComponent } from "./dashboard-profile/dashboard-profile.component";
import { JobproposalComponent} from "./jobproposal/jobproposal.component"

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent},
  { path: 'profile', component: DashboardProfileComponent},
  { path: 'jobproposal', component: JobproposalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [LoginComponent, RegisterComponent, HomeComponent, AboutComponent, DashboardProfileComponent, JobproposalComponent]
