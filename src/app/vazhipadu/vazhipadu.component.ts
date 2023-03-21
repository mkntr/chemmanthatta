import { Component, OnInit } from '@angular/core';
import { VAZHIPADU } from 'src/assets/dataitems';

@Component({
  selector: 'app-vazhipadu',
  templateUrl: './vazhipadu.component.html',
  styleUrls: ['./vazhipadu.component.css']
})
export class VazhipaduComponent implements OnInit {
  vazhipadu = VAZHIPADU
  
  constructor() { }

  ngOnInit(): void {
  }

}
