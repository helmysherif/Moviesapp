import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  allMovies:any = [];
  term:string = '';
  allPages:any = [];
  imagePrefix = 'https://image.tmdb.org/t/p/w500/'
  constructor(private _movieService:MovieService){
    _movieService.getTrending('movie').subscribe(data => {
      this.allMovies = data.results
      for (let i = 0; i <  25; i++) {
        this.allPages[i] = i+1;
      }
    })
  }
  getAllPages(id:number)
  {
    this._movieService.getAllMoviesPages(id).subscribe(res => {
      this.allMovies = res.results
    })
  }
  ngOnInit(): void {
  }

}
