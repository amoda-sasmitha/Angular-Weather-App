import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent }from './users/users.component';
import {PostComponent }from './post/post.component';
const routes: Routes = [
 {
   path :'',
   component : UsersComponent
 },
 {
  path :'posts',
  component : PostComponent
}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
