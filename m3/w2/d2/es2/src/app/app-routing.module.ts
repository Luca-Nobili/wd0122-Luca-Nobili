import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivepostComponent } from './activepost/activepost.component';
import { InactivepostComponent } from './inactivepost/inactivepost.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
},

{ path:'active-post',
  component: ActivepostComponent
},

{
  path:'inactive-post',
  component: InactivepostComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
