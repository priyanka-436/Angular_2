import { Component, OnInit } from '@angular/core';

import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router'
import { identifierName } from '@angular/compiler';

@Component({
    selector: 'userslist',
    templateUrl: './list.html'
})

export class userList implements OnInit {
    public users = [];
    constructor(private service: ApiService, private router: Router) {
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {

        this.service.getUsers().subscribe(response => {
            this.users = response.data
        })
    }

    editUser(id) {
        this.router.navigate(['/user', id])
    }

    deleteUser(id) {
        this.service.deleteuser(id).subscribe(resp => {
            this.getUsers();
        })
    }
}
