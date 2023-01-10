import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../Photo';
import { Comment } from '../Comment';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private photoService: PhotoService) { }

  photoId: string;
  photo: Photo;
  allComments: Comment[];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.photoId = params.get('photoId');
      console.log("Got photo id: ", this.photoId);
    });
    this.loadPhoto(this.photoId);
    this.loadComments(this.photoId);
  }

  loadPhoto(photoId: string){
    this.photoService.getPhoto(photoId).subscribe(photo => {
      this.photo = <Photo> photo;
      console.log("Got photo details: ", this.photo);
    });
  }

  loadComments(photoId: string){
    this.photoService.getComment(photoId).subscribe(comment => {
      this.allComments = (<Comment[]> comment).reverse();
      console.log("Got comment details: ", this.allComments)
    })
  }

  makeProfilePhoto(){
    this.photoService.makeProfilePhoto(this.photo.photoUrl)
      .subscribe(response => {
        console.log("Profile photo updated: ", response);
      });
  }

  makeCoverPhoto(){
    console.log("Params in photoDetails: ",this.photo.photoUrl, this.photo.albumId)
    this.photoService.makeCoverPhoto(this.photo.photoUrl, this.photo.albumId)
      .subscribe(response => {
        console.log("Cover photo updated: ", response);
      });
  }

}
