import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

@Injectable()
export class MovieService {
  apiUrl: string;
  apiKey: string;
  res: any;
  date: any;
  todayDate: any;
  weekAgoDate: any;

  constructor(private jsonp: Jsonp) {
    this.apiUrl = "https://api.themoviedb.org/3/";
    this.apiKey = "b811e14b2acca5fda59f3e2639712840";
    this.date = moment().format("YYYY-MM-DD");
    this.todayDate = this.date;
    this.weekAgoDate = moment().subtract(7, 'days').format("YYYY-MM-DD");
  }

  getPopular() {
    return this.jsonp.get(`${this.apiUrl}discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=${this.apiKey}`)
      .map(res => res.json());
  }

  getInTheaters() {
    console.log(this.weekAgoDate)
    return this.jsonp.get(`${this.apiUrl}discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=${this.todayDate}&primary_release_date.lte=${this.weekAgoDate}&api_key=${this.apiKey}`)
      .map(res => res.json());
  }

}
