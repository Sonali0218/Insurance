import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }
    staffData:any=[
      {id:11 ,fname:'Sonali',lname:'Doke',age:28},
      {id:22 ,fname:'suhas',lname:'Doke',age:29},
      {id:33 ,fname:'suhali',lname:'yadav',age:3}
    ]
  

  ngOnInit(): void {
  }
  showDetailsStaff(dt:any){
    console.log(dt);
    let id= dt.id;
    let fname =dt.fname;
    let lname =dt.lname;
    let age =dt.age;
    this.route.navigateByUrl(`staff/${id}/${fname}/${lname}/${age}`);
  }

}
