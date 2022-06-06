import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  favCounter = 0

  photos: Photo[] = []

  constructor(private photoservice:PhotoService) { }

  ngOnInit(): void {
    this.photoservice.getPhotos().subscribe((res)=> {
      this.photos = res.slice(0, 15)
    })

    this.photoservice.favSubject.subscribe(res =>{
      this.favCounter = res
    })
      
    
  }

  elimina(id:number){
    this.photoservice.deletePhoto(id).subscribe(res =>{
      this.photos = this.photos.filter(p => p.id !=id)
    })
  }

  like(){
    this.photoservice.addFav()

  }

}
