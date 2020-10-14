import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent} from './Second/Second.component';
import {ServiceComponent } from './ServiceComp/Service.component';
import { userList } from './usersList/list.component';
import { userComponent } from './user/user.component';






const routes: Routes = [
  { path:'user', component:userComponent },
  { path:'', component:userList },
  { path:'userslist', component:userList },
  { path:'user/:id', component:userComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
