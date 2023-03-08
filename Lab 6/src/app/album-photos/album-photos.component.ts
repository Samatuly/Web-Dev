import {Component, OnInit} from '@angular/core';
import {Photos} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos: Photos[];
  albumId:number;
  constructor(private route:ActivatedRoute, private albumService: AlbumsService) {
    this.photos = [];
    this.albumId = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
        let _id = params.get('id');
        if(_id){
          let id = +_id;
          this.albumId = id;
          this.albumService.getPhotos(id).subscribe((photos)=>{
            this.photos = photos;
          })
        }
      }
    )
  }
}
