import { Component, OnInit } from '@angular/core';
import * as Type from './timesheet-model';
import {DataSharingService} from '../data-sharing.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  timeSheet: Type.Model.TimeSheetForm = {
    inTime: '',
    outTime: '',
    date: '',
    workDetail: ''
  }

  timeSheetList: Type.Model.TimeSheetForm[] = [];

  error: Type.Model.ErrorForm = {
    inTime: false,
    outTime: false,
    date: false,
    workDetail: false
  }
  constructor(private dataSharing : DataSharingService) { }

  ngOnInit() {
  }

  onFocus(event) {
    this.error[event.target.name] = false;
  }

  onBlur(event) {
    if (event.target.value == '') {
      this.error[event.target.name] = true;
    }
  }

  submitTimeSheet() {
    this.error.inTime = this.timeSheet.inTime == '' ? true : false;
    this.error.outTime = this.timeSheet.outTime == '' ? true : false;
    this.error.date = this.timeSheet.date == '' ? true : false;
    this.error.workDetail = this.timeSheet.workDetail == '' ? true : false;
    
    this.dataSharing.updateInfo(this.timeSheet);

    this.timeSheetList.push(this.timeSheet);
    this.timeSheet = {
      inTime: '',
      outTime: '',
      date: '',
      workDetail: ''
    }
  }

  onDeleteRow(sno) {
    this.timeSheetList.splice(sno, 1);
  }
}
