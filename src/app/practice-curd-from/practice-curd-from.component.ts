import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-curd-from',
  templateUrl: './practice-curd-from.component.html',
  styleUrls: ['./practice-curd-from.component.css']
})
export class PracticeCurdFromComponent implements OnInit {
myForm:any;
fna:any;
la:any;
mail:any;
submitButton:boolean =true;
  constructor() { }

  ngOnInit(): void {
  }
  onsubmitfrom(frm:any){
    console.log(frm.value);
  }
}
