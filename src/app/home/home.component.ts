import { Component, OnInit } from '@angular/core';
import { UPIPAY } from 'src/assets/dataitems';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  upipay = UPIPAY

  constructor() { }

  ngOnInit(): void {
  }

}
