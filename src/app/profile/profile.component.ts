import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = "My profile page title";

  imgUrl = "https://i.pinimg.com/originals/b3/b7/2c/b3b72cb8f1dbf723ecc3d33274bd315e.jpg";

  viewCount = 0;

  name = "Kishan";

  list = ['item1', 'item2', 'item3'];

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUserProfile().subscribe(userProfile =>{
      this.user = <User> userProfile;
      console.log("Got user profile: ", userProfile);
    });
  }

}
