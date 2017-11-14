import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { routing } from './app.routing';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    JsonpModule,
    MomentModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
