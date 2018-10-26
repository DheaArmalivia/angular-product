import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from '../mock-data/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import {Message, MessageService} from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [MessageService]
})
export class EditComponent implements OnInit {

  // @Input() product: Product;
  product: Product=new Product();
  id: number;
  productId: number;
  name: string;
  price: number;
  msgs: Message[] = [];
  submitted: boolean;
  userForm: FormGroup;


  constructor(private route: ActivatedRoute,
              private prodService: ProductService,
              private location: Location,
              private messageService: MessageService,
              private fb: FormBuilder) { }

  ngOnInit(){
    this.getProdById();
    this.userForm = this.fb.group({
      'productId': ['', Validators.required],
      'name': ['', Validators.required],
      'price': ['', Validators.required]
    })
  }

  getProdById(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.prodService.getProductById(id).subscribe(product=>{
      this.product = product;
    });
    console.log(id);
    // console.log(this.product);
    // console.log(PRODUCTS[id-1]);
  }

  save(){
    // let product: Product=new Product();
    this.submitted = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.prodService.saveProduct(id, this.product).subscribe(product=>{
      product = this.product
      this.id = id
    });
    this.messageService.add({severity:'success', summary:'Success', detail:'Edit Data Berhasil Disimpan'});
    // this.msgs = [];
    // this.msgs.push({severity:'success', summary:'', 
    // detail:'Data Produk Berhasil Disimpan'});
    // console.log(id);
    // console.log(this.product);
    // console.log(this.product)
  }

  // save() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.prodService.saveProduct(this.product, id);
  //   console.log(this.product);
  //   console.log(id);
  //   this.msgs = [];
  //   this.msgs.push({severity:'success', summary:'', 
  //   detail:'Edit Data Produk Berhasil Disimpan'});
  // }

  goBack(){
    this.location.back();
  }
  

}
