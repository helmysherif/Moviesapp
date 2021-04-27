import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  type:any;
  id:any;
  movieDetail:any = [];
  imagePrefix = 'https://image.tmdb.org/t/p/w500/';
  constructor(private _movieService:MovieService , private _ActivatedRoute:ActivatedRoute){
    this.type = _ActivatedRoute.snapshot.paramMap.get('type');
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');
    _movieService.getItemDetail(this.type , this.id).subscribe(data => {
       this.movieDetail = data;
    })
  }

  ngOnInit(): void {
  }
}