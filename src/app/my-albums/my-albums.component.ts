import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Album } from '../Album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-my-albums',
  templateUrl: './my-albums.component.html',
  styleUrls: ['./my-albums.component.css']
})
export class MyAlbumsComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  albums: Album[];

  ngOnInit(): void {
    console.log("This is recent albums")
    this.albumService.getAllAlbums().subscribe(
      res => {
        this.albums = <Album[]>res;
        console.log("Got response: ", this.albums)
      }
    );
  }

}
