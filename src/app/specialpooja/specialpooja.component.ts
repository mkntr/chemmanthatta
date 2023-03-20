import { Component, OnInit } from '@angular/core';
import { SPECIALPOOJA } from '../../assets/dataitems';
@Component({
  selector: 'app-specialpooja',
  templateUrl: './specialpooja.component.html',
  styleUrls: ['./specialpooja.component.css']
})
export class SpecialpoojaComponent implements OnInit {
  specialpooja = SPECIALPOOJA
  constructor() { }

  ngOnInit(): void {
  }

}
