import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload-pictures',
  templateUrl: './upload-pictures.component.html',
  styleUrls: ['./upload-pictures.component.css']
})
export class UploadPicturesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  albumId: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.albumId = params.get('albumId');
      console.log("Got album id in upload pic: ", this.albumId);
    });
  }

}
