 import {Component} from  '@angular/core';
 import {Router} from '@angular/router'

@Component({
    selector:'app-Second',
    templateUrl:'./Second.Component.html',
    styleUrls:['./Second.Component.css']
})

export class SecondComponent {
constructor(private route : Router){

}
    gotoNext(){
this.route.navigate(['/first'])
    }

}