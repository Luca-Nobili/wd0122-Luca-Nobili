import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../class/todo';
import { TodoService } from '../service/todo.service';


@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  
  todos: Todo[] | undefined = undefined

  input: string | undefined 
  constructor(private todoService:TodoService, private router:Router) { }
  
  ngOnInit(): void {
    this.todoService.getTodos(false).then((res: Todo[]) =>{
      this.todos = res
    })
  }

  save(){
    this.todoService.addTodo(this.input as string).then(res =>{
      this.todos = res.filter(e=> !e.completed)
      
    })
  }

  completa(id:number){
    this.todoService.updateTodo(id).then(res =>{
      
        this.todos = res.filter(e=> !e.completed)
        
      
      
    })
  }
  
  

 

 

 

}
