import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  albumId: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.albumId = params.get('albumId');
      console.log("Got album id: ", this.albumId);
    });
  }

}
