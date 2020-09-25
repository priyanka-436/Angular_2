import { Component } from '@angular/core';
import {LogService} from '../Services/log.service'

@Component({
    selector:'services',
    templateUrl:'./ServiceComponent.html'
})

export class ServiceComponent {
    public num=36;
    public val=true;
    constructor(private LogService : LogService ){

    }

    btnLog(msg,text,num){
        this.LogService.log(msg,text,num)

    }
}