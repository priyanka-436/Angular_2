import { Component} from '@angular/core'
@Component({
    selector:'TDController',
    templateUrl:'./TD.html'
})

export class TDCtrl {

    public firstName;
    public lastName;
    public username;

   formFunction = () => {

    let inputObj ={
        'firstName':this.firstName,
        'lastName':this.lastName,
        'userName':this.username
    }
    console.log(inputObj)
    }
}
