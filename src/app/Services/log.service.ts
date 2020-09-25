import {Injectable} from '@angular/core'

@Injectable()

export class LogService {


    log( msg : string ,text : Number,val : any) {
        console.log(msg)
        return console.log(text , val)
    }
}