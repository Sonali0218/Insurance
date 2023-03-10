import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
private message = new BehaviorSubject('');
currentData = this.message.asObservable();
  constructor() { }
   setMessage(msg:any){
    this.message.next(msg);
   }
   getMessage(){
    return this.currentData;
   }
}
