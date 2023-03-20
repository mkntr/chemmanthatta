import { Component, OnInit } from '@angular/core';
import { DARSHAN } from '../../assets/dataitems';
@Component({
  selector: 'app-darshan',
  templateUrl: './darshan.component.html',
  styleUrls: ['./darshan.component.css']
})
export class DarshanComponent implements OnInit {
  darshan = DARSHAN

  constructor() { }

  ngOnInit(): void {
  }

}
