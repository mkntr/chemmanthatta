import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DARSHAN } from '../../assets/dataitems';
@Component({
  selector: 'app-darshan',
  templateUrl: './darshan.component.html',
  styleUrls: ['./darshan.component.css']
})
export class DarshanComponent implements OnInit {
  darshan = DARSHAN

  //to receive the value from parent component
  @Input()
  elementId = '';

  //to send the value to parent component
  @Output()
  newEvent = new EventEmitter<string>()
  
  callParentScrollEvent(value: string) {
    this.newEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
