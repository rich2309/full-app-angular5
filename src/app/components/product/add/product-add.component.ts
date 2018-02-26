import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params, Route} from '@angular/router';
import { Product } from '../../../entities/Product';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  providers: [ProductsService]
})
export class ProductAddComponent implements OnInit {
  public title: string;
  public product: Product;

  constructor(
    private _productService: ProductsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Registrar producto';
    this.product = new Product();
  }

  ngOnInit() {
    console.log('ProductAddComponent loaded');
  }

  onSubmit() {
    console.log(this.product);
    this._productService.addProduct(this.product).subscribe(
      response => {
          this._router.navigate(['/productos']);
      },
      error => {
        swal('Error de inserción');
      }
    );
  }
}
