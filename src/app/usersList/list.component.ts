import {Component , OnInit} from '@angular/core';

import {ApiService} from '../Services/api.service'

@Component({
    selector:'userslist',
    templateUrl:'./list.html'
})

export class userList  implements OnInit{
 public users =[];
    constructor(private service : ApiService){
    }

    ngOnInit(){

        this.service.getUsers().subscribe(response =>{
            this.users=response.data
          })
    }
}
