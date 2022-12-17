import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {
userid:any;
username:any;
useremail:any;
  constructor(private actRoute:ActivatedRoute) {
    console.log(this.actRoute.snapshot.params);
    this.userid=this.actRoute.snapshot.params['id'];
    this.username=this.actRoute.snapshot.params['name'];
    this.useremail=this.actRoute.snapshot.params['email'];

    //param map
    console.log(this.actRoute.paramMap);
    this.actRoute.paramMap.subscribe((res:any)=>{
      console.log(res);
      this.userid=res.params.id;
      this.username=res.params.name;
      this.useremail=res.params.email;
    })
   }

  ngOnInit(): void {
  }
  

}
