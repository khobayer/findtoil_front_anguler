import { Component, OnInit } from '@angular/core';


import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {  }

  title = 'findtoil'; 
  play = faPlay;
  arrowRight = faArrowRight;

  ngOnInit(): void {

    
  }

}

