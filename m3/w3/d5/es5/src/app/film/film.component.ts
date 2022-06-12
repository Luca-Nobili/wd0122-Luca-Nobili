import { Component, OnInit } from '@angular/core';
import { Movie } from '../class/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  movies : Movie [] | undefined = undefined

  input: string | undefined

  film={
    titolo :''
  }
  
  
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPreferito(false).then((res : Movie[])=>{
      this.movies = res
    })
  }


  addFilm(){
    this.movieService.addMovie(this.film)
    .subscribe(data => {
      console.log(data)
    })
  }


  save(){
    this.movieService.addPreferito(this.input as string).then(res =>{
      this.movies = res.filter(e=> !e.completed)
    })
  }

  elimina (id:number){
    this.movieService.removePreferito(id).then(res =>{
      this.movies = res
    })
  }

}
