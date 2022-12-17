import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';
  checkFlag:boolean=true;
  ug=[
    {name:'UG Home',path:'ug'},
    {name:'UG Staff',path:'ug/ugstaff'},
    {name:'UG Student',path:'ug/ugstud'},
    {name:'UG Courses',path:'ug/ugcourses'}
  ]
  constructor(private router: Router){

  }
  navigatetoStud(){
    if(this.checkFlag==true){
      // this.router.navigate(['stud']);
      this.router.navigateByUrl('stud');

    }
    else{
      this.router.navigate(['error'])
    }

  }
  onSelectUGmenu(menu:any){
    let route= menu.target.value;
    console.log(route);
    this.router.navigate([route]);
  }
}
