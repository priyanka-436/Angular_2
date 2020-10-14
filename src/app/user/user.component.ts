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
    public btnname="Add"
    constructor( private formbuilder : FormBuilder , private service : ApiService, private route : Router, private Router :ActivatedRoute ){

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

     if(this.Router.snapshot.paramMap.get('id')){
         this.btnname="Update"
         let userId=this.Router.snapshot.paramMap.get('id');
         this.service.getUsersByID(userId).subscribe((resp)=>{
            this.addUser.setValue(resp.data)
         })

     }

 }
 add(){
   if(this.Router.snapshot.paramMap.get('id')){
    this.service.updateUsers(this.addUser.value).subscribe((response)=>{
        this.route.navigate(['/userslist'])
    })
   } else{
    this.service.postUsers(this.addUser.value).subscribe((response)=>{
        this.route.navigate(['/userslist'])
    })
   } 

 }

}