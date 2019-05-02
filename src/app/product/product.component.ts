import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(private productService: ProductService) { }

  getProducts(): any{
    this.productService.getProducts().subscribe(
      data => {
        //console.log(data);
        this.product = data;
        this.product.reverse();
        console.log(this.product);
      }
    )
  }

  ngOnInit() {
    this.getProducts();
  }

}
