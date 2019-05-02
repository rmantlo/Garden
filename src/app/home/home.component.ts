import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product: any;
  newProducts: any;

  constructor(private productService: ProductService) { }

  getProducts(){
    this.productService.getProducts().subscribe(
      data => {
        this.product = data;
        this.newProducts = this.product.reverse().slice(0,3);
        console.log(this.newProducts);
      }
    )
  }

  ngOnInit() {
    this.getProducts();
  }

}
