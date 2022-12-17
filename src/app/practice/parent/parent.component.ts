import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
dataformparenttochild:any;
datafromchildtoparent:any;
  constructor() { 
    this.dataformparenttochild='this is data from parent to child component';
  }

  ngOnInit(): void {
  }
  emitDataFromchild(sa:any){
    console.log('this is custom event');
    this.datafromchildtoparent=sa;

  }
}
