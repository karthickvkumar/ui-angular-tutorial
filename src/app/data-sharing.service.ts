import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  public shareData = new BehaviorSubject({});
  public sharedInfo = this.shareData.asObservable();

  constructor( ) { }

  updateInfo(value){
    this.shareData.next(value);
  }
}
