import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAllAlbums(){
    var headers = this.getHeaders();
    return this.http.get("http://3.145.137.9:8080/api/albums");
  }

  getHeaders(){
    var headers = {
      'idToken' : localStorage.getItem('idTokem')
    };

    return headers;
  }
}
