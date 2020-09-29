import {Component, OnInit , Input, Output ,EventEmitter} from '@angular/core'

@Component({
selector:'child',
templateUrl:'./child.html'
})

export class childComponent implements OnInit {
constructor(){}

@Input() parentInput : string;
@Output () myOutput : EventEmitter <string> = new EventEmitter();

childToParentMsg : string = "I am  a value from Child component"


    ngOnInit(){

    }

    sendChildData(){
        this.myOutput.emit(this.childToParentMsg)
    }

}
