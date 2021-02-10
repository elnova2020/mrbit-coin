import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { User } from '../../model/user.model'
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit {

  user:User
  rate: string
  moves: any[]

  constructor(
    private userService:UserService,
    private bitcoinService:BitcoinService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.bitcoinService.getRate().subscribe(rate => this.rate = rate)
    this.moves = this.user.moves.slice(0,3)
  }

}
