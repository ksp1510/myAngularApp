import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }


  getHeaders(){
    var headers = {
      'idToken' : localStorage.getItem('userIdToken')
    };
    return headers;
  }

  uploadFile(file: File){
    var formData = new FormData();
    formData.append("file", file);
    var headers = this.getHeaders();
    return this.http.post(environment.API_BASE_URL+"files", formData, {headers});
  }
}
