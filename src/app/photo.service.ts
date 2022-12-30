import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getAllPhotos(){
    return this.http.get(`http://3.20.222.152:8080/api/photos`);
  }
}
