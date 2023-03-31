import { Component, HostListener, OnInit } from '@angular/core';
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
   
  public getScreenWidth: any;
  public getScreenHeight: any;

  constructor() { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

    //to find the size of the window
  @HostListener('window:resize',['$event'])
  onWindowResize(){
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
  

}
