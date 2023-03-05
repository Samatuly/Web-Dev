import { Component, Input} from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() category: Product[] = [];   // get the products from app component

  // remove product
  onListRemove(product: Product){
    this.category = this.category.filter((x:Product) => x != product)
  }
}
