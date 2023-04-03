import { Component, OnInit } from '@angular/core';
import { ADMINISTRATION, ADDRESS } from 'src/assets/dataitems';

@Component({
  selector: 'app-devaswom',
  templateUrl: './devaswom.component.html',
  styleUrls: ['./devaswom.component.css']
})
export class DevaswomComponent implements OnInit {
  administration = ADMINISTRATION
  address = ADDRESS

  constructor() { }

  ngOnInit(): void {
  }

}
