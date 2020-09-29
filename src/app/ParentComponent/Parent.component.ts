import {Component, OnInit} from '@angular/core'

@Component({
    selector:'parent',
    templateUrl:'./parent.html'
})

export class ParentComponent implements OnInit{
  public parentValue="Hey I am a value from Parent Component!!!"

  public childvar;
    constructor(){

    }
    ngOnInit(){

    }

    receiving(data){
this.childvar=  data
  }

}