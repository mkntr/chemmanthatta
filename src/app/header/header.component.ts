import { Component, OnInit } from '@angular/core';
import {NAVITEMS, TEMPLENAME,TEMPLELOGO} from '../../assets/dataitems' // Navigation bar items

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  navitems = NAVITEMS; 
  templename = TEMPLENAME;
  templelogo = TEMPLELOGO;
  
  constructor() { }

  ngOnInit(): void {
  }

}
