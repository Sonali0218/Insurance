import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sampletest',
  templateUrl: './sampletest.component.html',
  styleUrls: ['./sampletest.component.css']
})
export class SampletestComponent implements OnInit {
  fn:any="";

  constructor(private api: ApiService) { }
data:any;
  ngOnInit(): void {
    // this.getData();
    // this.sendData();
  }
  // getData(){
  //   this.api.getApiData().subscribe((res:any)=>{
  //     console.log(res);
  //   });
  //   (err:any)=>{
  //     console.log(err);
  //   }
  // }
  // sendData(){
  //   this.data={
  //     name:'sonali d',
  //     job:'angular',
  //     collegeName:'pqr'
  //   }
  //   this.api.sendApiData(this.data).subscribe(
  //     (res:any)=>{
  //       console.log(res);
  //     }
  //   )
  // }
  onSubmitForm(frm:any){
    console.log(frm.value);
    this.data=frm.value;
    console.log(this.data)
    this.api.sendApiData(this.data).subscribe((res:any)=>{
      console.log(res);
    })
    // console.log(frm.value.fname);
    // console.log("Hello form is submitted");
  }
}


