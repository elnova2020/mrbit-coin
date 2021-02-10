import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact.model'
import { ActivatedRoute } from '@angular/router'
import { ContactService } from '../../services/contact.service'
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})

export class ContactDetailsComponent implements OnInit {

  contact: Contact
  user:User
  contactSubscription:Subscription
  changedContact: Contact

  constructor(
    private route:ActivatedRoute,
    private contactService:ContactService,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.getContact()
    this.user = this.userService.getUser()
    this.contactSubscription = this.contactService.contact$.subscribe(contact => {
      this.changedContact = {...contact}
    })
  }

  getContact():void{
    const id = this.route.snapshot.paramMap.get('id')
    console.log('getContact() - ContactDetails - id ', id )
    this.contactService.getContactById(id).subscribe(contact => this.contact = contact)
  }

  ngOnDestroy():void {
    this.contactSubscription.unsubscribe()
    this.changedContact = null
  }

}
