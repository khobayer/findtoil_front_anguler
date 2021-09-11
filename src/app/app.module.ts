import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/*
*  Import thirt party Package
*/

/* 
*  Import Component
*/
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { JoblistingComponent } from './joblisting/joblisting.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { JobproposalComponent } from './jobproposal/jobproposal.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponent,
    AboutComponent,
    JoblistingComponent,
    DashboardProfileComponent,
    UserDashboardComponent,
    JoblistingComponent,
    JobproposalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
