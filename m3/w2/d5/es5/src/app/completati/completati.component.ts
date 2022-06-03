import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../class/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
  
  todos:Todo[] | undefined = undefined
 
  
constructor(private todoService: TodoService,private router:ActivatedRoute) { 
    

  }

  ngOnInit(): void {
    this.todoService.getTodos(true).then((res: Todo[]) =>{
      this.todos = res
    })
  }

  elimina(id:number){
    this.todoService.removeTodo(id).then(res =>{
      this.todos = res
      
    })
  }




}
