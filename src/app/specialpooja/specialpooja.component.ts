import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SPECIALPOOJA } from '../../assets/dataitems';
@Component({
  selector: 'app-specialpooja',
  templateUrl: './specialpooja.component.html',
  styleUrls: ['./specialpooja.component.css']
})
export class SpecialpoojaComponent implements OnInit {
  specialpooja = SPECIALPOOJA

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
