import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular';
  name = 'Luca';
  nomi:any[] = []

  ngOnInit(){
    fetch("https://jsonplaceholder.typicode.com/users/").then(res=>res.json()).then(res=>{

    this.nomi = res

    })

  }
  elimina(n: { name: any; }){
    alert('Sei sicuro di voler eliminare'+ ' ' + n.name)

  }
 

  dettagli(n:{id:number,name:string,username:string,email:string}){
   
    alert('Dettagli utente' + ' ' + n.id + ' ' + n.name + ' ' + n.username + ' ' + n.email) 

  }
}
