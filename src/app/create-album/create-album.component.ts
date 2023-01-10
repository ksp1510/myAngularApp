import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { FileService } from '../file.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {

  albumTitle: string;
  fileName: string;

  constructor(private fileService: FileService,
              private albumService: AlbumService) { }

  ngOnInit(): void {
  }

  createAlbum(file: File){
    this.fileName = file.name;
    console.log("File: ", this.fileName);
    this.fileService.uploadFile(file).subscribe( response => {
      console.log("Uploaded file data: ", response);
      this.saveAlbum(this.fileName);
    });

  }

  saveAlbum(fileName: string){
    this.albumService.saveAlbum(this.albumTitle, fileName);
  }

}
