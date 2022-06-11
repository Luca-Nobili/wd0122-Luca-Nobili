import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  film = {
      
      titolo : ''
  }

  addFilm(){
    this.movieService.registerUser(this.film)
    .subscribe(data => {
      console.log(data)
    })
  }

}
