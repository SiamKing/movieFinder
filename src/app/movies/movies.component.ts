import { Component, OnInit } from '@angular/core';

import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  popularList: Array<Object>;
  theatersList: Array<Object>;

  constructor(private movieService: MovieService) {
    this.movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
    })

    this.movieService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    })
  }

  // ngOnInit() {
  //   this.getPopular();
  // }

  // getPopular: void (){
  //   return this.movieService.getPopular()
  //
  // }



}
