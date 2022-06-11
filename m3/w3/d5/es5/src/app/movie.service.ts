import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  apiUrl:string = 'http://localhost:4201/movies';

  registerUser(movie:any) {
    return this.http.post(this.apiUrl, movie)
  }

  getUser(id:number) {
    return this.http.get(this.apiUrl+'/'+id)
  }


}
