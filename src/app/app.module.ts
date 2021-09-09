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
<<<<<<< HEAD
import { JoblistingComponent } from './joblisting/joblisting.component';
=======
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
>>>>>>> origin/taz


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponent,
    AboutComponent,
<<<<<<< HEAD
    JoblistingComponent
=======
    DashboardProfileComponent
>>>>>>> origin/taz
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
