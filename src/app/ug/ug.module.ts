import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UghomeComponent } from './ughome/ughome.component';
import { UgstaffComponent } from './ugstaff/ugstaff.component';
import { UgstudentComponent } from './ugstudent/ugstudent.component';
import { UgcourseComponent } from './ugcourse/ugcourse.component';
import { Route, RouterModule, Routes } from '@angular/router';
import{ButtonModule} from 'primeng/button';
const route:Routes=[
  { path:'',component:UghomeComponent },
  {path:'ugstaff',component:UgstaffComponent},
  {path:'ugstud',component:UgstudentComponent},
  {path:'ugcourses',component:UgcourseComponent}
   
 
]

@NgModule({
  declarations: [
    UghomeComponent,
    UgstaffComponent,
    UgstudentComponent,
    UgcourseComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    [RouterModule.forChild(route)]
  ]
})
export class UgModule { }
