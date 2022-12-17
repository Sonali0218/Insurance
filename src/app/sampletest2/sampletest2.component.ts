import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sampletest2',
  templateUrl: './sampletest2.component.html',
  styleUrls: ['./sampletest2.component.css']
})
export class Sampletest2Component implements OnInit {

  constructor(private api:ApiService) { }
data2:any;
  ngOnInit(): void {
    this.getData();
    this.sendData();
    this.updatedata();
    this.deleteData();
  }
  getData(){
    this.api.getApiData().subscribe((res:any)=>{
      console.log(res);
    });
    (err:any)=>{
      console.log(err);
    }
  }
  sendData(){
    this.data2={
      name:"sonali",
      job:"Angular Delveopment",
      collegeName:"KEC"
    }
    this.api.sendApiData(this.data2).subscribe((res:any)=>{
      console.log(res);
    })
  }
  updatedata(){
    this.data2={
      name:"suhali",
      lname:"doke",
      collegeName:"KEC",
      job:"Tech"
    }
    this.api.updateApiData(this.data2).subscribe((res:any)=>{
      console.log(res);
    })
  }
  deleteData(){
    let idd=2;
    this.api.deleteApiData(idd).subscribe((res:any)=>{
      console.log(res);
      console.log("Data Deleted successfully");
    }),
    (err:any)=>{
      console.log(err);
    }
  }
}
