import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent},
  { path: 'product', component:ProductsComponent },
  { path: 'add', component:AddComponent },
  { path: 'edit/:id', component:EditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
