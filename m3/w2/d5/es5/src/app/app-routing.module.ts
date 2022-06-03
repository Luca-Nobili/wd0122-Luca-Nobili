import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletatiComponent } from './completati/completati.component';
import { NewTodoComponent } from './new-todo/new-todo.component';

const routes: Routes = [

  {
    path: '',
    component: NewTodoComponent
  },

  {
    path: 'completati',
    component: CompletatiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
