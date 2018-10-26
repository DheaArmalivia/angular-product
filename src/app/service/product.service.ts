import { Injectable } from '@angular/core';
import { Product } from '../mock-data/product';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { PRODUCTS } from '../mock-data/product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  id: number;
  productId: number;
  name: string;
  price: number;
  product: Product;
  prod: Product[];
  constructor(private http: HttpClient) { }

  getProductsff(): Product[]{
    return PRODUCTS;
  }

  //GET DATA PRODUCTS
  getProducts(): Observable<any>{
    return this.http.get("http://localhost:4200/api/product/data");
  }

  // getProductById(id: number): Product{
  //   return (PRODUCTS.find(prod=>prod.id===id));
  // }

  //GET DATA BY ID
  getProductById(id: number): Observable<any>{
    return this.http.get("http://localhost:4200/api/product/show/"+id);
  }

  //CREATE DATA PRODUCT
  createProduct(product): Observable<Product>{
    return this.http.post<Product>("http://localhost:4200/api/product/create", product);
    // console.log(product);
  }

  //DELETE DATA PRODUCT
  deleteProduct(id): Observable<any>{
    return this.http.delete("http://localhost:4200/api/product/delete/"+id);
  }

  //UPDATE DATA PRODUCT
  saveProduct(id, product){
    return this.http.put("http://localhost:4200/api/product/update/"+id, product);
  }

  // saveProduct(product, id){
  //   const index = PRODUCTS.indexOf(this.getProductById(id));
  //   PRODUCTS.splice(index, 1, product);
  // }
  
  // deleteProduct(id){
  //  const index = PRODUCTS.indexOf(this.getProductById(id));
  //  PRODUCTS.splice(index, 1)
  // }
}
