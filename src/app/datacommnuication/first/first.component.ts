import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
sampleFirstData:any;
data:any;
  constructor(private dataSer:DataSharingService,private router:Router) {
    this.dataSer.getMessage().subscribe((res:any)=>{
      console.log(res);
      this.data=res;
    })
   }

  ngOnInit(): void {
  }
  sendDtFromFirst(){
    this.sampleFirstData="this data is from first to second component";
    this.dataSer.setMessage(this.sampleFirstData);
    this.router.navigate(['second']);
  }

}
