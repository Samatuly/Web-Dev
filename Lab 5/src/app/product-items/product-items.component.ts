import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent {
  @Input() product: Product;  // get the product items from parent component
  @Output() remove = new EventEmitter();

  cnt:number = 0;
  is_liked: boolean = false;

  constructor() {
    this.product = {
      image: '',
      name: '',
      price: 0,
      description: '',
      rating: '',
      link: '',
      id: 0
    };
  }

  share_wtsp(item_url: string) {
    window.alert(window.open(`https://web.whatsapp.com://send?text=${item_url}`));
  }

  share_telegram(item_url: string) {
    window.alert(window.open(`https://telegram.me/share/url?url=<${item_url}>&text=<TEXT>`));
  }

  liked(){
    this.is_liked = !this.is_liked
    this.is_liked ? this.cnt++ : this.cnt--;
  }

  removeProduct(){
    this.remove.emit(this.product)
  }
}
