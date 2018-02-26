import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Product } from '../entities/Product';
import { GLOBAL } from './global';

@Injectable()
export class ProductsService {
  public url: string;

  constructor(
    public http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  getProducts(): Observable<any> {
    return this.http.get(this.url + 'products');
  }

  addProduct(product: Product) {
    const toJson = JSON.stringify(product);
    const params = 'data_request=' + toJson;
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url + 'products', params, {headers: headers});
  }
}
