import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getHeaders(){
    var headers = {
      'idToken' : localStorage.getItem('idToken')
    };
    console.log("id token from album service: ", localStorage.getItem('idToken'));
    return headers;
  }

  getAllAlbums(){
    var headers = this.getHeaders();
    return this.http.get(environment.API_BASE_URL+"albums", {headers});
  }

  getAlbumById(){
    return this.http.get(`http://3.20.222.152:8080/api/album`);
  }
}
