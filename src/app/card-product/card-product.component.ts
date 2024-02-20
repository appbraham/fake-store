import { Component, Input } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { Product } from '../interface/product';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {

  @Input()
  product!:Product;

}
