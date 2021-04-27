import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  allTvs:any = [];
  term2:string = '';
  allPages:any = [];
  imagePrefix = 'https://image.tmdb.org/t/p/w500/'
  constructor(private _movieService:MovieService){
    _movieService.getTrending('tv').subscribe(data => {
      this.allTvs = data.results
      for (let i = 0; i <  25; i++) {
        this.allPages[i] = i+1;
      }
    })
  }
  getAllPages(id:number)
  {
    this._movieService.getAllTvsPages(id).subscribe(res => {
      this.allTvs = res.results
    })
  }
  ngOnInit(): void {
  }

}
