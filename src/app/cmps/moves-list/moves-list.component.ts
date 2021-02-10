import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.css']
})
export class MovesListComponent implements OnInit {
  @Input() moves:any[]
  
  constructor() { }

  ngOnInit(): void {
  }

}
