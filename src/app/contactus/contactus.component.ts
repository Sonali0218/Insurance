import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from '../serices/userdetails.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
data:any;

  constructor(private sd:UserdetailsService ,private route:Router) { 
   
    this.userDetailsForm();
    // this.userdetails();
  }

  ngOnInit(): void {
  }
  userDetailsForm(){

    this.sd.getuserDetalis().subscribe((res:any)=>{
      console.log(res);
      this.data=res;
    });
    (err:any)=>{
      console.log(err);
    }
  }
  userdetails(a:any){
    console.log(a);
    let id= a.id;
    let name=a.name;
    let email=a.email;
    this.route.navigateByUrl(`staffdetails/${id}/${name}/${email}`);
  }
  

}
