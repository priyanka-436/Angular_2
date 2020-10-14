import {Injectable} from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable()

export class ApiService {
    constructor ( private http : HttpClient) {
    }

    baseUrl: string = 'http://localhost:8080/users/';
    deleteUrl: string = 'http://localhost:8080/deleteUser/';

getUsers() : Observable<any>{
    return this.http.get<any>(this.baseUrl)
}

postUsers(user) : Observable <any>{
return this.http.post(this.baseUrl,user)
}


getUsersByID(id) : Observable<any>{
    return this.http.get<any>(this.baseUrl + id)
}
 updateUsers(user) : Observable <any>{
    return this.http.put<any>(this.baseUrl + user.id,user)
 }
 deleteuser(id) : Observable <any>{
    return this.http.get<any>(this.deleteUrl+ id)
 }

}