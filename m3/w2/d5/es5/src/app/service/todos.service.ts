import { Injectable } from '@angular/core';
import { Todo } from '../class/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  static todos: any;

  constructor() { }

  todos:Todo[] = [] 


  addTodo(todo:Todo):Promise<Todo>{
    return new Promise((res, rej)=> {
      setTimeout(() =>{
        
        this.todos.push(todo)
        res(todo)
      }, 2000)
    })
  }

  get():Promise<Todo[]>{
    return new Promise((res, rej)=>{
      setTimeout(()=>{
        res(this.todos)
      }, 2000)
    })
  }

  

  

  

 


}
