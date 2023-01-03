import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  incrementCount() {
    this.viewCount++;
  }
}
