import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent} from './Second/Second.component';
import {ServiceComponent } from './ServiceComp/Service.component';




const routes: Routes = [
  { path:'first', component:FirstComponent },
  { path:'', component:SecondComponent },
  { path:'servicom/:Id', component:ServiceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
