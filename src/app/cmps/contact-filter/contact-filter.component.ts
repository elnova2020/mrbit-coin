import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.css']
})
export class ContactFilterComponent implements OnInit {

  text:string
  subscription: Subscription

  constructor(
    private contactService:ContactService
  ) { }

  ngOnInit(): void {
    this.subscription = this.contactService.filterBy$.subscribe(filterBy => {
      this.text = filterBy.term
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onSetFilter() {
    this.contactService.setFilter({term: this.text})
  }

}
