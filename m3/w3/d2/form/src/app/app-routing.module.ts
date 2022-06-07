import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTDComponent } from './form-td/form-td.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {
    path: 'form-td',
    component : FormTDComponent
  },
  {
    path: 'reactive',
    component: ReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
