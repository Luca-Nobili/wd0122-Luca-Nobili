import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../class/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  apiUrl:string = 'http://localhost:4201/movies';
  movies:Movie [] = []

  addMovie(movie:any) {
    return this.http.post(this.apiUrl, movie)
  }

  getMovies(id:number) {
    return this.http.get(this.apiUrl+'/'+id)
  }

  addPreferito(titolo:string):Promise<Movie []>{
    return new Promise((res, rej)=> {
      setTimeout(() =>{
        
        this.movies.push({id: this.movies.length, titolo:titolo, completed:false})
        res(this.movies)
      }, 1000)
    })
  }


  getPreferito(comp:boolean):Promise<Movie[]>{
    return new Promise((res, rej)=>{
      setTimeout(()=>{
        let filteredMovies = this.movies.filter(e=>e.completed == comp)
        res(filteredMovies)
      }, 1000)
    })
  }


  removePreferito(id:number):Promise<Movie[]>{
    return new Promise ((res, rej)=> {
      setTimeout(()=>{
        this.movies = this.movies.filter(e => e.id != id)
        res(this.movies)
      })
    })
  }


}
