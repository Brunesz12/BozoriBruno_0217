import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      title: 'Termék 1',
      price: 1000,
      rating: 4.5,
      stock: 20
    },
    {
      title: 'Termék 2',
      price: 2000,
      rating: 4.0,
      stock: 15
    },
    {
      title: 'Termék 3',
      price: 3000,
      rating: 3.5,
      stock: 30
    }
  ];
}
