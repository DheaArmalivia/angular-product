import { Component, OnInit, Input } from '@angular/core';
import { ProductService} from '../service/product.service';
import { Product } from '../mock-data/product';
import {ConfirmationService, Message, MessageService} from 'primeng/api';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ProductsComponent implements OnInit {

  prod: Product[];
  product: Product;
  msgs: Message[] = [];
  cols: any[];
  id: number;
  loggedIn= false;
  constructor(private productService: ProductService,
              private custService: UserService,
              private confirmService: ConfirmationService,
              private messageService: MessageService) {

  this.cols = [
    { field: 'id', header: 'Id' },
    { field: 'productId', header: 'ProductId' },
    { field: 'name', header: 'Name' },
    { field: 'price', header: 'Price' }
    ];

  }

  logout(){
    this.custService.logout();
  }
   
  // getProducts(): void{
  //   this.prod = this.productService.getProducts()
  // }

  getProducts(){
    this.productService.getProducts().subscribe(prod=>{
      this.prod = prod;
    })
    console.log(this.prod);
  }

  
  ngOnInit() {
    this.getProducts();
    this.custService.getLoggedIn().subscribe(value=>{
      this.loggedIn = value;
    })
  }


  delete(id){
    this.confirmService.confirm(
      {
        message: 'Apakah anda yakin ingin menghapus data??',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.productService.deleteProduct(id).subscribe(product=> 
              this.product = product
            )
            console.log(id);
            this.messageService.add({severity:'error', summary:'Success', detail:'Hapus Data Berhasil'});
        },
        reject: () => {
            this.messageService.add({severity:'warn', summary:'Cancel', detail:'Data Tidak Jadi Dihapus'});
        }
      }
    )
  }

}
