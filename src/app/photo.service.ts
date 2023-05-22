import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Comment } from './Comment';
import { Photo } from './Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient,
              public datepipe: DatePipe,
              private router: Router,) {}

  getHeaders(){
    var headers = {
      'idToken' : localStorage.getItem('userIdToken')
    };
    return headers;
  }

  getAllPhotos(){
    var headers = this.getHeaders();
    return this.http.get(environment.API_BASE_URL+"photos", {headers});
  }

  getPhoto(photoId: string){
    var headers = this.getHeaders();
    return this.http.get(environment.API_BASE_URL+"photos/"+photoId, {headers});
  }

  getComment(photoId: string){
    var headers = this.getHeaders();
    return this.http.get(environment.API_BASE_URL+"photos/"+photoId+"/comments", {headers});
  }

  makeProfilePhoto(photoUrl: string) {
    var headers = this.getHeaders();
    var params = new HttpParams().set("photoUrl", photoUrl);
    console.log("Params in photoService for profilePhoto: ", params);
    return this.http.put(environment.API_BASE_URL+"users/me/profilePhoto", params, {headers});
  }

  makeCoverPhoto(photoUrl: string, albumId: string) {
    var headers = this.getHeaders();
    var parameters = new HttpParams().set("albumId", albumId).set("photoUrl", photoUrl);
    console.log("Params in photoService: ", parameters);
    return this.http.put(environment.API_BASE_URL+"albums/coverPhoto", parameters, {headers});
  }

  savePhoto(albumId: string, fileName: string){
    var headers = this.getHeaders();
    let currentDate =this.datepipe.transform((new Date), 'MM/dd/yyyy');
    var photo: Photo = {
      albumId: albumId,
      createdBy: "user",
      dateCreated: currentDate,
      id: null,
      photoUrl: environment.API_BASE_URL+"files/view?key="+fileName
    };
    this.http.post(environment.API_BASE_URL+"photos", photo, {headers}).subscribe(res =>{
      console.log("Photo uploaded: ", res);
      //var photo = <Photo> (res);
      this.router.navigate(['/album', albumId]);
    })
  }

  saveComment(photoId: string, newComment: string){
    var headers = this.getHeaders();
    let currentDate =this.datepipe.transform((new Date), 'MM/dd/yyyy hh:mm:ss');
    var comment: Comment = {
      createdBy: "user",
      dateCreated: currentDate,
      id: null,
      message: newComment,
      photoId: photoId
    };
    return this.http.post(environment.API_BASE_URL+"comments", comment, {headers});
  }

  /*Frontend - Assignment 7

Following the examples in Class 7, create a file upload field in the upload-picture component. Once an image is uploaded using this, it will create a photo in that album (Hint: take the albumId from router and use the POST api/photos API).
Add a button “Change order” in the photo-details component. Clicking on the button will change the order of the comments shown (i.e. toggle between most recent at the beginning vs at the end).
Use the messageService to show error messages that come up during the sign-up process.
*/
}
