import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FirstComponent } from './datacommnuication/first/first.component';
import { ParentComponent } from './datacommnuication/parent/parent.component';
import { ChildComponent } from './datacommnuication/parent/child/child.component';
import { SecondComponent } from './datacommnuication/second/second.component';
import { FormsModule } from '@angular/forms';
import { SampletestComponent } from './sampletest/sampletest.component';
import { Sampletest2Component } from './sampletest2/sampletest2.component';
import { FormdataComponent } from './firebase/formdata/formdata.component';
import { PracticeCurdFromComponent } from './practice-curd-from/practice-curd-from.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaffComponent,
    StudentComponent,
    ContactusComponent,
    ErrorComponent,
    LoginComponent,
    StaffDetailsComponent,
    FirstComponent,
    ParentComponent,
    ChildComponent,
    SecondComponent,
   SampletestComponent,
   Sampletest2Component,
   FormdataComponent,
   PracticeCurdFromComponent,
   TestComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
