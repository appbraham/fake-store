import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from '../interface/product';
import { ProductService } from '../services/product.service';
import { StarComponent } from '../star/star.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ChipComponent } from "../chip/chip.component";
import { CardProductComponent } from "../card-product/card-product.component";
import { SearchProductComponent } from "../search-product/search-product.component";
import { ImagePlaceholderComponent } from "../image-placeholder/image-placeholder.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [RouterOutlet, ReactiveFormsModule, StarComponent, ChipComponent, CardProductComponent, SearchProductComponent, ImagePlaceholderComponent]
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  limit: number = 20;
  order: string = 'ASC';

  textSearchFC = new FormControl('');

  categories: string[] = [];

  productService:ProductService = inject(ProductService);

  ngOnInit(): void {

    this.productService.getAllProducts(this.limit, this.order).subscribe(
      (product) => this.products.push(...product)
    );

    this.filteredProducts = this.products;

    this.productService.getAllCategories().subscribe(
      category => this.categories.push('all', ...Object.values(category))
    );

  }

  getSelectedCategory(categoryName: string) {

    this.products = [];

    if (categoryName === 'all') {
      this.products = this.filteredProducts;

    } else {
      this.productService.getProductsByCategory(categoryName, this.limit, this.order)
          .subscribe( product => {
            this.products.push(...product);
      });
    }
  }

  searchedProduct($event:Product[]){
    this.products = $event;
  }

}
