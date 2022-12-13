import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-recent-albums',
  templateUrl: './recent-albums.component.html',
  styleUrls: ['./recent-albums.component.css']
})
export class RecentAlbumsComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    console.log("This is recent albums")
    this.albumService.getAllAlbums().subscribe((res) =>
      console.log("Got response: ", res)
    );
  }

}
