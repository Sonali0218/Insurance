import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
data:any;
  constructor(private dataSe:DataSharingService ,private router:Router) {
    this.dataSe.getMessage().subscribe((res:any)=>{
      console.log(res);
      this.data=res;
    })
   }

  ngOnInit(): void {
  }
  sendDtFromSecond(){
    let dt= "this is the data from second to first component";
    this.dataSe.setMessage(dt);
    this.router.navigate(['first']);
  }

}
