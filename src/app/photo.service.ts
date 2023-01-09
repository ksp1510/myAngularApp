import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {}

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
}
