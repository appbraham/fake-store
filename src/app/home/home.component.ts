import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from '../interface/product';
import { ProductService } from '../services/product.service';
import { StarComponent } from '../star/star.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ChipComponent } from "../chip/chip.component";
import { CardProductComponent } from "../card-product/card-product.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [RouterOutlet, ReactiveFormsModule, StarComponent, ChipComponent, CardProductComponent]
})
export class HomeComponent implements OnInit, OnChanges {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  limit: number = 20;
  order: string = 'desc';

  textSearchFC = new FormControl('');

  categories: string[] = [];

  // productService:ProductService = inject(ProductService);
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getAllProducts(this.limit, this.order).subscribe(
      (product) => this.products.push(...product)
    );

    this.filteredProducts = this.products;

    this.textSearchFC.valueChanges.pipe(debounceTime(1000)).subscribe((res) => this.searchProduct(res));

    this.productService.getAllCategories().subscribe(
      category => this.categories.push('all', ...Object.values(category))
    );

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  searchProduct(nameProduct: string | null = null) {

    if (!nameProduct) {
      this.products = this.filteredProducts;
    }

    this.products = this.products.filter(
      (product) => product.title.toLowerCase().includes(nameProduct!.toLowerCase())
    );
  }

  getSelectedCategory(categoryName: string) {

    this.products = [];

    if (categoryName === 'all') {
      this.products = this.filteredProducts;
      console.log('all selected');

    } else {

      this.productService.getProductsByCategory(categoryName, this.limit, this.order)
          .subscribe( product => {
            this.products.push(...product);
            console.log(product);
      });
    }
  }
}
