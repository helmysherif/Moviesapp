import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies:any[] , term:string): any {
    if(term == undefined || movies == undefined)
    {
      return movies;
    } else {
      return movies.filter(function(movies){
        if(movies.title == undefined)
        {
          return movies.name.toLowerCase().includes(term.toLowerCase())
        } else {
          return movies.title.toLowerCase().includes(term.toLowerCase())
        }
      })
    }
  }

}
