import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../entities/Product';

@Component({
  selector : 'app-product-list',
  templateUrl : './product-list.component.html',
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {
  public title: string;
  public products: Product[];
  public currency: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductsService
  ) {
    this.title = 'Listado de productos';
    this.currency = '€';
  }

  ngOnInit() {
      console.log('product-list compoenent loaded');
      this._productService.getProducts().subscribe(
        result => {
          this.products = result;
        },
        error => {
            console.log(<any>error);
        }
      );
  }
}
