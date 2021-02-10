import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup-page',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User
  username:string
  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onSignup() {
    this.userService.signUp(this.username)
    this.router.navigateByUrl('welcome')
  }
}
