import { Component, OnInit, HostListener } from '@angular/core';
import { IMGCAROUSEL } from '../../assets/dataitems';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  imgcarousel = IMGCAROUSEL

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
