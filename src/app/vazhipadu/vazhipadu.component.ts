import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VAZHIPADU } from 'src/assets/dataitems';

@Component({
  selector: 'app-vazhipadu',
  templateUrl: './vazhipadu.component.html',
  styleUrls: ['./vazhipadu.component.css']
})
export class VazhipaduComponent implements OnInit {
  vazhipadu = VAZHIPADU
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
