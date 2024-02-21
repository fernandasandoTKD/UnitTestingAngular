import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit{

  products: Product []  = [];
  //Inyeccción de dependencias
  constructor( private productsService: ProductsService){}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productsService.getAllsimple().subscribe(products =>{
    this.products= products;
    });
  }

}
