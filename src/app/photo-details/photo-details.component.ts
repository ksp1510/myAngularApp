import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    console.log("This is photo details")
    this.photoService.getAllPhotos().subscribe((res) =>
      console.log("Got response: ", res)
    );
  }

}
