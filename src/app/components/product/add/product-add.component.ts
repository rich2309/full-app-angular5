import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';
import { Product } from '../../../entities/Product';
import { ProductsService } from '../../../services/products.service';
import { GLOBAL } from '../../../services/global';

@Component({
  selector: 'app-add-product',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  providers: [ProductsService]
})
export class ProductAddComponent implements OnInit {
  public title: string;
  public product: Product;
  public filesToUpload: any;
  public resultUpload: any;

  constructor(
    private _productService: ProductsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Registrar producto';
    this.product = new Product();
    this.filesToUpload = null;
  }

  ngOnInit() {
    console.log('ProductAddComponent loaded');
  }

  onSubmit() {
    if (this.filesToUpload && this.filesToUpload.length >= 1) {
      this._productService.makeFileRequest(GLOBAL.url + 'upload_image', [], this.filesToUpload).then((result) => {
            console.log(result);
            this.resultUpload = result;
            this.product.url_image = this.resultUpload.filename;
            this.onPrepareProduct();
          },
          (error) => {
            console.error(error);
          });
    } else {
      this.onPrepareProduct();
    }

  }

  onPrepareProduct() {
    console.log(this.product);
    this._productService.addProduct(this.product).subscribe(
      response => {
        this._router.navigate(['/productos']);
      },
      error => {
        this._router.navigate(['/productos']);
      }
    );
  }

  /**
   * Method to detect file input changes and prepare upload
   * @param fileInput
   */
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

}
