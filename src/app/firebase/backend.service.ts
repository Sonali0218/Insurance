import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }
  saveProducts(products:any[]){
    return this.http.post('https://sonali-56e3b-default-rtdb.firebaseio.com/sonali.json',products)
  }
}
