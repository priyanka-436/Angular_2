import { Component , OnInit } from '@angular/core';
import {LogService} from '../Services/log.service'
import {Router,ActivatedRoute} from '@angular/router'

@Component({
    selector:'services',
    templateUrl:'./ServiceComponent.html'
})

export class ServiceComponent implements OnInit{
    public num=36;
    public val=true;
    public id;
    constructor(private LogService : LogService, private Route : Router,private routerService : ActivatedRoute ){

    }

    ngOnInit(){
        this.id=  this.routerService.snapshot.paramMap.get('Id')
    }

    btnLog(msg,text,num){
        this.LogService.log(msg,text,num)

    }



}