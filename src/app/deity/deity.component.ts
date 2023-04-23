import { Component, OnInit } from '@angular/core';
import { DEITY } from 'src/assets/dataitems';
@Component({
  selector: 'app-deity',
  templateUrl: './deity.component.html',
  styleUrls: ['./deity.component.css']
})
export class DeityComponent implements OnInit {
  deity = DEITY

  constructor() { }

  ngOnInit(): void {
  }

}
