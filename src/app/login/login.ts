import {Component ,OnInit} from '@angular/core';
import { Router} from '@angular/router'
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
    selector:'login',
    templateUrl:'./login.html'
})

export class Login  implements OnInit{
    loginForm : FormGroup
    public error;
 constructor( private formbuilder : FormBuilder , private route : Router){

 }

 ngOnInit(){
 this.loginForm = this.formbuilder.group({
     'username':['',Validators.required],
     'password' :['', Validators.required]
 })
 }

 onSubmit(){
     if(this.loginForm.value.username=="abcdef" && this.loginForm.value.password=="password"){
         localStorage.setItem('token',"jjwerwter6767jgsjfgjd666bnxcbvd6u67");
         this.route.navigate(['/userslist'])
     }else {
         this.loginForm.value.username = " ";
         this.loginForm.value.password =" ";
         this.error = "Incorrect username or password"
     }
 }

}