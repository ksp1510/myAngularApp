import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formVisibility = true;
  loggedOut = false;

  name: string;
  email: string;
  password: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }
  isLoggedIn(){
    if(this.loggedOut){
      this.loggedOut = false;
    }
    else{
      this.loggedOut = true;
    }
  }
  changeSignInVisibility(){
    this.formVisibility = true;
  }

  changeSignUpVisibility(){
    this.formVisibility = false;
  }

  login(){
    console.log('User tried to login');
    this.userService.login(this.email, this.password);
    this.isLoggedIn();
    this.email = "";
    this.password = "";
  }

  signup(){
    console.log('User tried to signup');
    this.userService.signup(this.email, this.password, this.name);
    this.isLoggedIn();
    this.email = "";
    this.password = "";
  }

}
