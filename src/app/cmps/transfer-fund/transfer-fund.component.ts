import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';
import { User } from 'src/app/model/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.css']
})
export class TransferFundComponent implements OnInit {

  @Input() contact:Contact
  amount: number
  user:User

  constructor(
    private contactService:ContactService,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getUser()
  }

  onTransfer() {
    //should be contact.amount += amount
    const amount = +this.amount
    console.log('this amount ', this.amount)
    console.log('local amount ', amount)
    this.user.coins = this.user.coins - amount
    this.userService.addMove( { at: Date.now(), to: this.contact.name, amount: this.amount, toId: this.contact._id})
    if ( !this.contact.moves ) this.contact.moves = []
    this.contact.moves.unshift( { at: Date.now(), to: this.contact.name, amount: this.amount, toId: this.contact._id})
    this.contactService.saveContact({...this.contact})
  }

}
