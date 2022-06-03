import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../class/todo';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  
  
  constructor(private todosservice: TodosService, private router:Router) { }
  
  ngOnInit(): void {
  }
  
  id!: number
  title: string ='';
  compledet!: boolean ;
 
  

  save(){

    let newTodo = new Todo(this.id,this.title,this.compledet)
    this.todosservice.addTodo(newTodo)
    this.router.navigate(['/completati'])
  }

 

 

}
