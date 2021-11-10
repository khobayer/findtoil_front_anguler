import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { HomeServices } from "../services/home-services.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  companyData:any;
  categoryInfos:any;

  constructor(private companyInfo: HomeServices ) {
    this.companyInfo.getCompanyInfo().subscribe((datas) => {
      this.companyData = datas;

      console.log(datas);
    })

    this.companyInfo.getCatInfo().subscribe(allData => {
      this.categoryInfos = allData;

    })
  }

  title = 'PPPPP'; 
  play = faPlay;
  arrowRight = faArrowRight;

  ngOnInit(): void {

    
  }

}

