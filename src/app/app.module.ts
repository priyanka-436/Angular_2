import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent} from './Second/Second.component';
import { BracketsPipe} from './CustomPipe/Brackets.Pipe';
import {ServiceComponent } from './ServiceComp/Service.component';
import {LogService} from './Services/log.service'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    BracketsPipe,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
