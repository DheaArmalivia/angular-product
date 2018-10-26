import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLoggedIn: Observable<boolean>;
  
  ngOnInit(): void {
    this.isLoggedIn = this.userService.getLoggedIn();
    console.log(this.isLoggedIn)
  }
  title = 'product';
  constructor(private userService:UserService) { }
  logout(){
    this.userService.logout();
  }
}
