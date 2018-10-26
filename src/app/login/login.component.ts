import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { MessageService } from 'primeng/api';
import { Customer } from '../mock-data/customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: any;
  customer: Customer = new Customer();
  constructor(private fb: FormBuilder,
              private custService: UserService,
              private messageService: MessageService) { 
    
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
    console.log(sessionStorage)
    }

  private setLoggedIn(value: boolean){
    this.custService.setLoggedIn(value);
  }

  // login(){
  //   let email = this.userForm.get('email').value;
  //   let password = this.userForm.get('password').value;

  //   // this.custService.login(email, password)
  //   if(email === "admin" && password === "admin"){
  //     this.messageService.add({severity:'success', summary:'Success', detail:'Berhasil Login'});
  //     this.router.navigate(['/product'])
  //   } else {
  //     this.messageService.add({severity:'error', summary:'Gagal', detail:'Login Gagal'});
  //   }
  // }

  login(customer){
    // let email = this.userForm.get('email').value;
    // let password = this.userForm.get('password').value;
    // let customer = { email, password};
    console.log(customer);
    if(!this.custService.login(customer)){
      this.messageService.add({severity:'error', summary:'Login Gagal', detail:'Username atau Password Invalid'});
    } else {
      this.messageService.add({severity:'success', summary:'Success', detail:'Berhasil Login'});
    }
  }

}
