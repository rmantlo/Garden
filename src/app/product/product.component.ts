import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;
  someProducts: any;
  token: any;

  constructor(private productService: ProductService) { }

  getProducts(): any{
    this.productService.getProducts().subscribe(
      data => {
        //console.log(data);
        this.product = data;
        this.product.reverse();
        this.someProducts = this.product.slice(0,20);
        //console.log(this.someProducts);
      }
    )
  }
  setToken(){
    this.token = localStorage.getItem('token');
    //console.log(this.token)
  }

  ngOnInit() {
    this.getProducts();
    this.setToken();
  }

  deletePlant(id: number){
    //console.log(id);
    this.productService.deleteProducts(id).subscribe(
      data => {
        console.log('deleted');
      }
    )
  }

}
