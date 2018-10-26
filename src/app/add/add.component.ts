import { Component, OnInit } from '@angular/core';
import { Product } from '../mock-data/product';
import { Location } from '@angular/common';
import { ProductService } from '../service/product.service';
import {Message, MessageService} from 'primeng/api';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [MessageService]
})
export class AddComponent implements OnInit {

  product: Product= new Product();
  msgs: Message[] = [];
  isEmpty = '';
  submitted: boolean;
  userForm: FormGroup;


  constructor(private productService: ProductService,
              private location: Location,
              private messageService: MessageService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      'productId': ['', Validators.required],
      'name': ['', Validators.required],
      'price': ['', Validators.required]
    })
  }

  // add() {
  //     PRODUCTS.push({
  //       id: this.inputId,
  //       productId: this.inputProductId,
  //       name: this.inputName,
  //       price: this.inputPrice
  //     })
  //     console.log(PRODUCTS);
  // } 

  // add(){
  //   this.productService.createProduct(this.product);
  //   console.log(this.product);
  //   console.log(PRODUCTS);
  //   this.msgs = [];
  //   this.msgs.push({severity:'success', summary:'', 
  //   detail:'Data Produk Berhasil Ditambahkan'});
  // }

  // add(){
  //   this.productService.createProduct(this.product).subscribe(product=>{
  //     this.product = product;
  //   });
  //   // this.msgs = [];
  //   // this.msgs.push({severity:'success', summary:'', 
  //   // detail:'Data Produk Berhasil Ditambahkan'});
  //   this.messageService.add({severity:'success', summary:'Success', detail:'Data Berhasil Ditambahkan'});
  //   console.log(this.product);
  // }
  add(value: string){
    this.productService.createProduct(this.product).subscribe(product=>{
      this.product = product;
    });
    this.submitted = true;
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Berhasil Ditambahkan'});
    // console.log(this.product);
  }

  goBack(){
    this.location.back();
  }
}

