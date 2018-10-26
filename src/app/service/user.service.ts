import { Injectable } from '@angular/core';
import { CUSTS } from '../mock-data/customer-data';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn: BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  getLoggedIn(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }
  setLoggedIn(value: boolean){
    this.loggedIn.next(value);
  }

  constructor(private router:Router) { }

  login(customer){
    let authenticated = CUSTS.find(cust=>cust.email === customer.email)
    if(authenticated && authenticated.password == customer.password){
      sessionStorage.setItem("customer", authenticated.email)
      // localStorage.setItem("customer", authenticated.email)
      this.loggedIn.next(true)
      this.router.navigate(['/product'])
      console.log(sessionStorage)
      return true;
    }
    return false;
  }

  logout(){
    sessionStorage.removeItem('customer')
    // localStorage.removeItem('customer');
    this.loggedIn.next(false)
    this.router.navigate(['/'])
    // console.log(localStorage)
  }

}
