import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Albums, Photos} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  constructor(private client: HttpClient) { }
  getAlbum(id: number): Observable<Albums>{
    return this.client.get<Albums>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  getAlbums(): Observable<Albums[]>{
    return this.client.get<Albums[]>(`https://jsonplaceholder.typicode.com/albums`);
  }
  getPhotos(id: number): Observable<Photos[]>{
    return this.client.get<Photos[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
  updateAlbum(album: Albums):Observable<Albums>{
    return this.client.put<Albums>(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album)
  }
  deleteAlbum(album: Albums): Observable<any>{
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${album.id}`)
  }
}
