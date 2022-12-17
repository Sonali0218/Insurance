import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { ContactusComponent } from './contactus/contactus.component';
import { FirstComponent } from './datacommnuication/first/first.component';
import { ParentComponent } from './datacommnuication/parent/parent.component';
import { SecondComponent } from './datacommnuication/second/second.component';
import { ErrorComponent } from './error/error.component';
import { FormdataComponent } from './firebase/formdata/formdata.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SampletestComponent } from './sampletest/sampletest.component';
import { Sampletest2Component } from './sampletest2/sampletest2.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  // {path:'', redirectTo:'login',pathMatch:'full'},
  { path: '', component: HomeComponent },
  // {path:'login',component:LoginComponent},
  { path: 'staff/:id/:fname/:lname/:age', component: StaffComponent },
  { path: 'stud', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactusComponent, resolve: [AuthGuard] },
  { path: 'staffdetails/:id/:name/:email', component: StaffDetailsComponent },
  { path: 'parent', component: ParentComponent },
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'sampletest',component:SampletestComponent},
  {path:'sampletest2',component:Sampletest2Component},
  {path:'form',component:FormdataComponent},
  {path:'parent2',component:ParentComponent},




  {
    path:'ug',loadChildren:()=>import('./ug/ug.module').then(mod=>mod.UgModule)
  },
  {
    path:'pg',loadChildren:()=>import('./pg/pg.module').then(mod=>mod.PgModule)
  },
  { path: '**', component: ErrorComponent },
  // {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
