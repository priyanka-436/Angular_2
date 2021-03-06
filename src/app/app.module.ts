import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent} from './Second/Second.component';
import { BracketsPipe} from './CustomPipe/Brackets.Pipe';
import {ServiceComponent } from './ServiceComp/Service.component';
import {LogService} from './Services/log.service';
import {childComponent} from './childComponent/childComponent';
import { ParentComponent } from './ParentComponent/Parent.component';
import {TDCtrl} from './TemplateDriven/TD.Controller';
import { ApiService } from './Services/api.service';

import { userList } from './usersList/list.component';
import { userComponent } from './user/user.component';
import { Login} from './login/login';
import {AuthenticonService} from './Services/Authentication.service'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    BracketsPipe,
    ServiceComponent,
    childComponent,
    ParentComponent,
    TDCtrl,
    userList,
    userComponent,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LogService, ApiService,AuthenticonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
