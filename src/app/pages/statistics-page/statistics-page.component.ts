import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.css']
})
export class StatisticsPageComponent implements OnInit {

  graph1:string = 'price'
  graph2:string = 'volume'
  constructor() { }

  ngOnInit(): void {
  }

}
