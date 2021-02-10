import { Injectable } from '@angular/core';
import { Contact } from '../model/contact.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs/observable/of'

var gUser = {
              name: "Elizabeth Novak",
              coins: 3000, 
              moves: []
            }

var gUsers = []

var _moves: any[] = gUser.moves;
var _moves$ = new BehaviorSubject(_moves)
var moves$ = _moves$.asObservable() 


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser() {
    return gUser
  }

  signUp(name:string) {

    gUser = {  name: name,
              coins: 100, 
               moves: []
            }

  //   gUsers.push({  
  //     name: name,
  //     coins: 100, 
  //     moves: []
  // })
  return {  name: name,
              coins: 100, 
              moves: []
          }
  }

  // addMove( contact, amount) {
  //   gUser.moves.push({contact, amount})
  // }

  addMove( transfer ) {
    gUser.moves.unshift(transfer)
  }

  getMoves(contact:Contact) {
    // return of(gUser.moves.filter(move => move.to === contact.name))
    //mock the server work
    _moves = _moves.filter(move => move.to === contact.name)

    // change the observable data in the service - let all the subscribers know
    _moves$.next(_moves)
  }

}
