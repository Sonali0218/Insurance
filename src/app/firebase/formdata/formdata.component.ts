import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {

  constructor(private sd:BackendService) { }
dataTitle= "Table Products";
products=[
  {
    id:'p1',
    name:'laptop',
    price:45000
  },
  {
    id:'p2',
    name:'mobile',
    price:40000
  },
  {
    id:'p3',
    name:'Dell laptop',
    price:50000
  },
]
onAddProduct(id: { value: any; },name: { value: any; },price: { value: any; }){
  this.products.push({
    id :id.value,
    name  : name.value,
    price : price.value

  })
}
onSaveProduct(){
this.sd.saveProducts(this.products).subscribe((res:any)=>{
  console.log(res);
});
(err:any)=>{
  console.log(err);
}
}
onFetchProduct(){

}
onDeleteProduct(id:any){
if(confirm("Do you want to delete this product")){
  this.products.splice(id,1)
}
}
  ngOnInit(): void {
  }

}
