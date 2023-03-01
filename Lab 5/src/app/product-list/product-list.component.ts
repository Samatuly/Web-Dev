import { Component } from '@angular/core';
import {products} from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.open('https://wa.me/87714105100', '_blank');
  }

  link(){
    window.open('products.link', '_blank');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
