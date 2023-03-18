import { Component, OnInit } from '@angular/core';
import { SPECIALPOOJA } from '../../assets/dataitems';
@Component({
  selector: 'app-pooja',
  templateUrl: './pooja.component.html',
  styleUrls: ['./pooja.component.css']
})
export class PoojaComponent implements OnInit {
  specialpooja = SPECIALPOOJA
  constructor() { }

  ngOnInit(): void {
  }

}
