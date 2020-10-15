import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent} from './Second/Second.component';
import {ServiceComponent } from './ServiceComp/Service.component';
import { userList } from './usersList/list.component';
import { userComponent } from './user/user.component';
 import { Login } from './login/login';
 import {AuthenticonService} from './Services/Authentication.service'



const routes: Routes = [
  { path:'user', canActivate :[AuthenticonService], component:userComponent },
  { path:'', component:Login },
  { path:'userslist', component:userList },
  { path:'user/:id', canActivate :[AuthenticonService],component:userComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
