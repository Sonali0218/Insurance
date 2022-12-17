import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormdataComponent } from '../formdata/formdata.component';
import { BackendService } from '../backend.service';

const routes: Routes =[
  {path:'form',component:FormdataComponent},
]

@NgModule({
  declarations: [FormdataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[BackendService]
})
export class ProductModule { }
