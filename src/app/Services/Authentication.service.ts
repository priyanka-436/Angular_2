import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()

export class AuthenticonService implements CanActivate {
    constructor() {

    }

    canActivate(): boolean {
        if (localStorage.getItem('token') == "jjwerwter6767jgsjfgjd666bnxcbvd6u67") {
            return true;
        } else {
            return false;

        }
    }
}