import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private _HttpClient:HttpClient) { }
  getTrending(mediaType:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=101b15d060bd4055dbc2e20f259a12be`);
  }
  getItemDetail(mediaType:any , id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}%7D?api_key=101b15d060bd4055dbc2e20f259a12be&language=en-US`);
  }
  getAllMoviesPages(page:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=101b15d060bd4055dbc2e20f259a12be&page=${page}`)
  }
  getAllTvsPages(page:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=101b15d060bd4055dbc2e20f259a12be&page=${page}`)
  }
}
