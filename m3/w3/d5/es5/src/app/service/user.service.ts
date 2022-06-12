import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  apiUrlRegister:string = 'http://localhost:4201/register';
  apiUrl:string = 'http://localhost:4201/users';

  users: User [] = []

  registerUser(user:any) {
    return this.http.post(this.apiUrlRegister, user)
  }

  getUser(id:number) {
    return this.http.get(this.apiUrl+'/'+id)
  }


  addProfilo(email:string, password:string):Promise<User []>{
    return new Promise((res, rej)=> {
      setTimeout(() =>{
        
        this.users.push({id: this.users.length, email:email, password:password ,completed:false})
        res(this.users)
      }, 1000)
    })
  }


  getProfilo(comp:boolean):Promise<User[]>{
    return new Promise((res, rej)=>{
      setTimeout(()=>{
        let filteredUsers = this.users.filter(e=>e.completed == comp)
        res(filteredUsers)
      }, 1000)
    })
  }














}


