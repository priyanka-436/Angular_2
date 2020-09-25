import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hetyyy';
  person="Jack";
  mode=12;
  p1=true;

  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

users = [
  {
      "firstName": "John",
      "lastName": "wick",
      "username": "john_werterick",
      "age": 28,
      "salary": 50988899
    },
     {
      "firstName": "Jack",
      "lastName": "Sparrow",
      "username": "johnerter_wick",
      "age": 28,
      "salary": 50988899
    },
     {
      "firstName": "Spider",
      "lastName": "Man",
      "username": "jofxvcxcvhn_wick",
      "age": 28,
      "salary": 50988899
    }, {
      "firstName": "Bat",
      "lastName": "Man",
      "username": "johncxvxtrdt_wick",
      "age": 28,
      "salary": 50988899
    }]



  
}
