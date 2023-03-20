import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pooja',
  templateUrl: './pooja.component.html',
  styleUrls: ['./pooja.component.css']
})
export class PoojaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //scroll to the specific id view / section in the page in a smooth manner
  scroll(id: string){
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth',block: "start", inline: "nearest"});
  }

}
