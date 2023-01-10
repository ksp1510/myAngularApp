import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Album } from './Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient,
              private router: Router,
              public datepipe: DatePipe) { }

  getHeaders(){
    var headers = {
      'idToken' : localStorage.getItem('userIdToken')
    };
    return headers;
  }

  saveAlbum(albumTitle: string, fileName: string){
    let currentDate =this.datepipe.transform((new Date), 'MM/dd/yyyy');
    var album: Album = {
      coverPhotoUrl: environment.API_BASE_URL+"files/view?key="+fileName,
      createdBy: "ksp1510",
      creationDate: currentDate,
      id: null,
      name: albumTitle
    };
    var headers = this.getHeaders();
    this.http.post(environment.API_BASE_URL+"albums", album, {headers}).subscribe(res =>{
      console.log("Album created: ", res);
      var album: Album = <Album> (res);
      var albumId = album.id;
      this.router.navigate(['/album', albumId]);
    })
  }

  getAllAlbums(){
    var headers = this.getHeaders();
    return this.http.get(environment.API_BASE_URL+"albums", {headers});
  }

  getPhotos(albumId: string){
    var headers = this.getHeaders();
    return this.http.get(environment.API_BASE_URL+"albums/"+albumId+"/photos", {headers});
  }
}
