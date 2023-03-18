import { Component, OnInit } from '@angular/core';
import { POEM } from '../../assets/dataitems';
@Component({
  selector: 'app-prelude',
  templateUrl: './prelude.component.html',
  styleUrls: ['./prelude.component.css']
})
export class PreludeComponent implements OnInit {
  poem = POEM;
  constructor() { }

  ngOnInit(): void {
  }

}
