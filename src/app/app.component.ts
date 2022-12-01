import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAngularApp';

  constructor(public userService: UserService) { }

  signout(){
    console.log('User tried to log out');
    this.userService.logout();
  }
}
