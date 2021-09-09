import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Component for Routing */
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AboutComponent } from "./about/about.component";
<<<<<<< HEAD
import { JoblistingComponent } from "./joblisting/joblisting.component"
=======
import { DashboardProfileComponent } from "./dashboard-profile/dashboard-profile.component"
>>>>>>> origin/taz

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent},
<<<<<<< HEAD
  { path: 'job', component: JoblistingComponent}
=======
  { path: 'profile', component: DashboardProfileComponent}
>>>>>>> origin/taz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

<<<<<<< HEAD
export const routingComponent = [LoginComponent, RegisterComponent, HomeComponent, AboutComponent, JoblistingComponent]
=======
export const routingComponent = [LoginComponent, RegisterComponent, HomeComponent, AboutComponent, DashboardProfileComponent]
>>>>>>> origin/taz
