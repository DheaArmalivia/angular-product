import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Validators, FormsModule, FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LoginComponent } from './login/login.component';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddComponent,
    EditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PanelModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    MessageModule, CardModule,
    MessagesModule,
    KeyFilterModule,
    ConfirmDialogModule,
    HttpClientModule,
    ToastModule, ReactiveFormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
