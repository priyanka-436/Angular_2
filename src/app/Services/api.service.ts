import {Injectable} from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable()

export class ApiService {
    constructor ( private http : HttpClient) {
    }

    baseUrl: string = 'http://localhost:8080/users/';

getUsers() : Observable<any>{
    return this.http.get<any>(this.baseUrl)
}

postUsers(user) : Observable <any>{
return this.http.post(this.baseUrl,user)
}

}