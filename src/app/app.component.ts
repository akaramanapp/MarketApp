import { Component } from '@angular/core';
import { Product } from './Models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CartList: Product [] = [];

  ProductList: Product [] = [
    new Product('Iphone 7', 'Telefon', 2500, 'Apple Iphone 7 - Beyaz'),
    new Product('Sony', 'Telefon', 2000, 'Sony E - Beyaz'),
    new Product('Samsung S8', 'Telefon', 3000, 'S8 - Siyah'),
    new Product('Hp', 'Bilgisayar', 4500, 'Hp Bilgisayar I7')
  ] 

  addCart(product: Product){
    this.CartList.push(product);
  }
}
