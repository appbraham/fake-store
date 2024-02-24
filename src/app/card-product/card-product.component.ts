import { Component, Input } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { Product } from '../interface/product';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, StarComponent],
  templateUrl: './card-product.component.html',
})
export class CardProductComponent {

  @Input()
  product!:Product;

}
