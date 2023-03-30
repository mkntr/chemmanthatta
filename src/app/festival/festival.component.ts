import { Component, OnInit } from '@angular/core';
import { GALLERY } from 'src/assets/dataitems';
@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.css']
})
export class FestivalComponent implements OnInit {
  gallery = GALLERY;

  constructor() { }

  ngOnInit(): void {
  }

}
