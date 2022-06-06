import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError, Subject, throwError } from 'rxjs';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  counter = 0

  favSubject = new Subject<number>()

  url = "http://jsonplaceholder.typicode.com/photos/"

  constructor(private http:HttpClient) { }

  getPhotos(){
    return this.http.get<Photo[]>(this.url).pipe(
      catchError(err => throwError(err))
    )
  }

  deletePhoto(id:number){
    return this.http.delete<Photo[]>(this.url+id).pipe(
      catchError(err => throwError(err)))
  }

  addFav(){
    this.counter++
    this.favSubject.next(this.counter)
  }
}
