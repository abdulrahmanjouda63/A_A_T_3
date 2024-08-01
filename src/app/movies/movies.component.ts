import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies',
  providers:[DataService],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  datalist: any[] = [];
trendingMovies: any;
  constructor(private _ApidataService: DataService) {

    this._ApidataService.getdata().subscribe((data) => {
      this.datalist = data.results
      console.log(this.datalist)
    })
  }

}
