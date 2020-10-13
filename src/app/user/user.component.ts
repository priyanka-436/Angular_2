import {Component,OnInit} from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector:'user',
    templateUrl:'./user.html'
})


export class userComponent implements OnInit {
    addUser:FormGroup
    constructor( private formbuilder : FormBuilder , private service : ApiService, private route : Router){

    }
 ngOnInit(){
     this.addUser = this.formbuilder.group({
        id: [],
        username: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', Validators.required],
        salary: ['', Validators.required]
     })

 }
 add(){
this.service.postUsers(this.addUser.value).subscribe((response)=>{
    this.route.navigate(['/userslist'])
})
 }

}