import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template:`<h3>HCustom Pipe!!!</h3>
  {{title}}
  <p></p>
  {{title  | brackets}}
  <p></p>
  {{title  | brackets : 'l'}}`,
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  title: string ="have a great day";
  constructor() { }

  ngOnInit(): void {

  }

}
