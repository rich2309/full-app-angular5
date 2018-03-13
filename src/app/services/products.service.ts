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

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i ++) {
        formData.append('upload', files[i], files[i].name);
      }
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }
}
