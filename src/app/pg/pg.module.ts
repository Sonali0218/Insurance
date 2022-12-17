import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PghomeComponent } from './pghome/pghome.component';
import { PgstaffComponent } from './pgstaff/pgstaff.component';
import { PgstudentComponent } from './pgstudent/pgstudent.component';
import { PgadmissionComponent } from './pgadmission/pgadmission.component';
import { RouterModule, Routes } from '@angular/router';


const route: Routes=[
  {path:'',component:PghomeComponent},
  {path:'pgstaff',component:PgstaffComponent},
  {path:'pgstud',component:PgstudentComponent},
  {path:'pgcourses',component:PgadmissionComponent}
]



@NgModule({
  declarations: [
    PghomeComponent,
    PgstaffComponent,
    PgstudentComponent,
    PgadmissionComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class PgModule { }
