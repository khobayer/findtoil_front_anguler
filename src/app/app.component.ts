import { Component } from '@angular/core';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Thirt party package import
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'findtoil';
  play = faPlay;
  arrowRight = faArrowRight;
  
}
