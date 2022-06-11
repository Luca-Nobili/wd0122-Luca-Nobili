import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { FilmComponent } from './film.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FilmComponent
  ],
  imports: [
    CommonModule,
    FilmRoutingModule,
    FormsModule
  ]
})
export class FilmModule { }
