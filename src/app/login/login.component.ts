import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formVisibility = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeSignInVisibility(){
    this.formVisibility = true;
  }

  changeSignUpVisibility(){
    this.formVisibility = false;
  }

}
