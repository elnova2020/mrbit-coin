import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Subscription } from 'rxjs';
import { Contact } from '../../model/contact.model'
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  subscription: Subscription
  contacts: Contact[]
  user: User

  constructor(
    private contactService: ContactService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.subscription = this.contactService.contacts$.subscribe(contacts => this.contacts = contacts)
    this.user = this.userService.getUser()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
