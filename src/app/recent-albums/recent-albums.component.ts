import { Component, OnInit } from '@angular/core';
import { Album } from '../Album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-recent-albums',
  templateUrl: './recent-albums.component.html',
  styleUrls: ['./recent-albums.component.css']
})
export class RecentAlbumsComponent implements OnInit {

  albums: Album[];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    console.log("This is recent albums")
    this.albumService.getAllAlbums().subscribe(
      res => {
        this.albums = <Album[]>res;
        console.log("Got response: ", this.albums)

      }
    );
  }

}
