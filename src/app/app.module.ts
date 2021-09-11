import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/*
  Import thirt party Package
*/
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as $ from 'jquery';

/* 
  Import Component
*/
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { JobproposalComponent } from './jobproposal/jobproposal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponent,
    AboutComponent,
    DashboardProfileComponent,
    JobproposalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
