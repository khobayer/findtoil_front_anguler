import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  user_id = '';
  password = '';

  loginFormValue(user_info: any, pass_word: any) {
    this.user_id = user_info;
    this.password = pass_word;
  }

  // login velidation and set local storage here
  

}
