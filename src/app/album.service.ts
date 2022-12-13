import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAllAlbums(){
    var headers = this.getHeaders();
    //console.log("This is get all album function", this.http.get(`http://3.145.137.9:8080/api/albums`).subscribe(res=>console.log("Got all albums from album: ", res)))
    //console.log("Link: ",this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=19b76203ca354cb1a323c6707993330a`).subscribe((res=>console.log("Got all post: ", res))))
    //https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=19b76203ca354cb1a323c6707993330a .subscribe(res=>console.log("Got all albums: ", res))
    return this.http.get(`http://18.224.23.116:8080/api/albums`);
  }

  getHeaders(){
    var headers = {
      'apiKey' : '19b76203ca354cb1a323c6707993330a',
      'idToken' : localStorage.getItem('idTokem')
    };

    return headers;
  }
}
