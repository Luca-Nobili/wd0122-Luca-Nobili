import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../class/todo';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
  
  todos!:Todo[]
  newTodo!:Todo
  
  
  
  

  
  

  constructor(private todoservice: TodosService,private router:ActivatedRoute) { 
    this.todos = todoservice.todos

  }

  ngOnInit(): void {

   

    
    
    

    


  }




}
