import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @ Input() parentData:any;

  @ Output() itemEvent =new EventEmitter<any>();
datafromchildtoparent:any;
  constructor() {
    this.datafromchildtoparent='this is data from child to parent component';
   }

  ngOnInit(): void {
  }
  sendDataFromParent(){
    console.log("welcome");
    this.itemEvent.emit(this.datafromchildtoparent);
  }
}
