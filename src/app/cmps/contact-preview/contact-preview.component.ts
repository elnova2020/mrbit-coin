import { Component, Input, OnInit } from '@angular/core';
import {Contact} from '../../model/contact.model'

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.css']
})
export class ContactPreviewComponent implements OnInit {

  @Input() contact:Contact
  constructor() { }

  ngOnInit(): void {
  }

}
