import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {Albums} from "../models";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  albums: Albums;
  loaded: boolean;
  constructor(private route:ActivatedRoute, private albumsService: AlbumsService) {
    this.albums = {} as Albums;
    this.loaded = true;
  }
  renameAlbum(){
    const form = document.querySelector('input');
    if(form && form.value != ''){
      this.albums.title = form.value;
      this.albumsService.updateAlbum(this.albums).subscribe((albums) => {
        this.albums = albums;
      })
      form.value = "";
    }
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
        let _id = params.get('id');
        if(_id){
          let id = +_id;
          this.loaded = false;
          this.albumsService.getAlbum(id).subscribe((album)=>{
            this.albums = album;
            this.loaded = true;
          })
        }
      }
    )
  }
}
