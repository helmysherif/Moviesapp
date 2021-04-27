import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies:any = [];
  trendingTv:any = [];
  imagePrefix = 'https://image.tmdb.org/t/p/w500/'
  constructor(private _movieService:MovieService){
    _movieService.getTrending('movie').subscribe(data => {
      data.results.sort(function(a:any,b:any){
        return b.vote_average - a.vote_average
      })
      this.trendingMovies = data.results.slice(0,10);
    })
    _movieService.getTrending('tv').subscribe(data => {
      data.results.sort(function(a:any,b:any){
        return b.vote_average - a.vote_average
      })
      this.trendingTv = data.results.slice(0,10);
    })
  }

  ngOnInit(): void {
  }

}
