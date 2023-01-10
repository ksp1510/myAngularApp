import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../file.service';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-upload-pictures',
  templateUrl: './upload-pictures.component.html',
  styleUrls: ['./upload-pictures.component.css']
})
export class UploadPicturesComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private fileService: FileService,
              private photoService: PhotoService) { }

  albumId: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.albumId = params.get('albumId');
      console.log("Got album id in upload pic: ", this.albumId);
    });
  }

  uploadPhoto(file: File){
    console.log("File in photo upload name: ", file.name)
    this.fileService.uploadFile(file).subscribe( res => {
      console.log("Uploaded file data: ", res);
      this.savePhoto(file.name);
    });
  }

  savePhoto(fileName: string){
    this.photoService.savePhoto(this.albumId, fileName);
  }

}
