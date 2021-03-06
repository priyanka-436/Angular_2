import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  // template:`<h3>HCustom Pipe!!!</h3>
  // {{title}}
  // <p></p>
  // {{title  | brackets}}
  // <p></p>
  // {{title  | brackets : 'l'}}`,
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  testform : FormGroup
  title: string ="have a great day";
  constructor( private formbuilder : FormBuilder , private Router: Router) { }

  ngOnInit(): void {
this.testform= this.formbuilder.group({
  'uname' :['',Validators.required],
  'fname':['',Validators.required]
})
  }

  FormFunction(){
    console.log(this.testform.value)
    this.Router.navigate(['/servicom',35])
  }
}
