import { Component, OnInit, inject } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../interface/product';
import { ImagePlaceholderComponent } from "../image-placeholder/image-placeholder.component";

@Component({
    selector: 'app-detail-product',
    standalone: true,
    templateUrl: './detail-product.component.html',
    imports: [StarComponent, ImagePlaceholderComponent]
})
export class DetailProductComponent implements OnInit {

  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  product!: Product;

  ngOnInit(): void {
    const productId = parseInt(this.route.snapshot.params['id'], 10);
    this.productService.getProductById(productId).subscribe(product => this.product = product);
  }


}
