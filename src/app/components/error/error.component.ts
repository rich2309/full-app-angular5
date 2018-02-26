import {Component, OnInit} from '@angular/core';

@Component({
  'selector': 'app-error',
  'templateUrl': './error.component.html',
  'styleUrls': ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  public httpErrorCode: number;
  public message: string;

  constructor() {
    this.message = 'La página que buscas no existe';
    this.httpErrorCode = 404;
  }

  ngOnInit() {
    console.log('ErrorComponent sowed');
  }

}
