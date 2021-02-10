import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact.model';
import { ActivatedRoute } from '@angular/router'
import { ContactService } from '../../services/contact.service'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  contact:Contact
  contactSubscription:Subscription
  changedContact:Contact
  contactByIdSubscription:Subscription

  constructor(
    private route:ActivatedRoute,
    private contactService:ContactService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getContact()

    this.contactSubscription = this.contactService.contact$.subscribe(contact => {
      this.changedContact = {...contact}
    })
  }

  ngOnDestroy() {
    this.contactSubscription.unsubscribe()
    this.contactByIdSubscription?.unsubscribe()
  }

  getContact():void{
    const id = this.route.snapshot.paramMap.get('id')
    console.log('getContact() - ContactDetails - id ', id )
    if (!id) {
      this.contact = new Contact()
    } else {
      this.contactByIdSubscription = this.contactService.getContactById(id).subscribe(contact => this.contact = contact)
    }
  }

  onSaveContact(){
    console.log('onSaveContact, contact - ', this.contact)
    this.contactService.saveContact({ ...this.contact })

    if (this.changedContact._id) this.router.navigateByUrl(`/contacts/details/${this.changedContact._id}`)
    else this.router.navigateByUrl(`/contacts/details/${this.contact._id}`)
    
  }

  onDelete() {
   
    this.contactService.deleteContact(this.contact._id)
    this.router.navigateByUrl('/contacts')
  }

  onBack() {
    if ( this.contact._id ) this.router.navigateByUrl(`/contacts/details/${this.contact._id}`)
    else this.router.navigateByUrl(`/contacts`)
  }

}
