import { Component , OnInit } from '@angular/core';
import {ApiService} from './Services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( private service : ApiService){

  }
  title = 'hetyyy';
  person="Jack";
  mode=12;
  p1=true;
  public  users =[];

  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

 

ngOnInit(){
//   this.service.getUsers().subscribe(function(response){
//     console.log(response)
// console.log(response.data)
//   })

this.service.getUsers().subscribe(response =>{
  this.users=response.data
})
}

// users = [
//   {
//       "firstName": "John",
//       "lastName": "wick",
//       "username": "john_werterick",
//       "age": 28,
//       "salary": 50988899
//     },
//      {
//       "firstName": "Jack",
//       "lastName": "Sparrow",
//       "username": "johnerter_wick",
//       "age": 28,
//       "salary": 50988899
//     },
//      {
//       "firstName": "Spider",
//       "lastName": "Man",
//       "username": "jofxvcxcvhn_wick",
//       "age": 28,
//       "salary": 50988899
//     }, {
//       "firstName": "Bat",
//       "lastName": "Man",
//       "username": "johncxvxtrdt_wick",
//       "age": 28,
//       "salary": 50988899
//     }]



  
}
