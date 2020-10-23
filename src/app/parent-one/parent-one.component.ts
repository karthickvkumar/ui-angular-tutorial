import { Component, OnInit, ViewChild } from '@angular/core';
import {ChildOneComponent} from '../child-one/child-one.component';
import {DataSharingService} from '../data-sharing.service';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements OnInit {

  message : string = '';
  reveivedData : string = '';
  timesheet: any = {}
  @ViewChild(ChildOneComponent, {static: false}) private childOneReference;
  
  constructor(private dataSharing : DataSharingService) { }

  ngOnInit() {
    this.dataSharing.sharedInfo.subscribe((response) => {
      console.log(response)
      this.timesheet = response;
    })
  }

  onClick(){
    console.log(this.childOneReference)
  }

  receiveMessage(value){
    console.log(value)
    this.reveivedData = value;
  }
}
