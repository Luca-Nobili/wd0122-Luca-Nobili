import { Injectable } from '@angular/core';
import { Todo } from '../class/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  static todos: any;

  constructor() { }

  todos:Todo[] = [] 


  addTodo(title:string):Promise<Todo []>{
    return new Promise((res, rej)=> {
      setTimeout(() =>{
        
        this.todos.push({id: this.todos.length, title:title, completed:false})
        res(this.todos)
      }, 2000)
    })
  }

  getTodos(comp:boolean):Promise<Todo[]>{
    return new Promise((res, rej)=>{
      setTimeout(()=>{
        let filteredTodos = this.todos.filter(e=>e.completed == comp)
        res(filteredTodos)
      }, 2000)
    })
  }

  updateTodo(id:number):Promise<Todo []>{
    return new Promise((res, rej)=>{
      setTimeout(()=>{
        
        this.todos = this.todos.map((e)=>e.id==id ? {...e , completed: !e.completed}:e)
        res(this.todos)
          
        },2000)
    })
  }
  removeTodo(id:number):Promise<Todo []>{
    return new Promise ((res, rej)=>{
      setTimeout(()=>{
       this.todos = this.todos.filter(e => e.id != id)
        res(this.todos)
      })
    })
  }

  

  

  

 


}
