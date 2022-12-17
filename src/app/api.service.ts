import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getApiData(){
    return this.http.get('https://reqres.in/api/users?page=2');
  }
  sendApiData(dt:any){
    return this.http.post('https://reqres.in/api/users',dt)
  }
  updateApiData(dt2:any){
    return this.http.put('https://reqres.in/api/users/2',dt2)
  }
  deleteApiData(idd:any){
    return this.http.delete('https://reqres.in/api/users/',idd)
  }
//   sendData(sd:any){
// return this.http.post('https://sonali-56e3b-default-rtdb.firebaseio.com/sonali.json',sd);
//   }
}
