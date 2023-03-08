import { Component, OnInit} from '@angular/core';
import {Albums} from "../models";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums: Albums[];
  constructor(private AlbumsService: AlbumsService) {
    this.albums = [];
  }
  deleteAlbum(albums: Albums){
    this.AlbumsService.deleteAlbum(albums);
    this.albums = this.albums.filter((x)=>x.id !== albums.id);
  }
  ngOnInit(){
    this.AlbumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }
}
