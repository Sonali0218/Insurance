import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
staffId:any;
staffFname:any;
staffLname:any;
staffAge:any
  constructor(private actRoute : ActivatedRoute) { 
    // to fecth the route data we have two option

    // 1. Route Param(Direct Values)
    console.log(this.actRoute.snapshot.params);
    // this.staffId =this.actRoute.snapshot.params['id'];
    // this.staffName = this.actRoute.snapshot.params['fname'];


    // 2. Route Map(observable values)
    console.log(this.actRoute.paramMap);
    this.actRoute.paramMap.subscribe((res:any)=>{
      console.log(res);
      this.staffId = res.params.id;
      this.staffFname=res.params.fname;
      this.staffLname=res.params.lname;
      this.staffAge=res.params.age
    })

  }

  ngOnInit(): void {
  }

}
