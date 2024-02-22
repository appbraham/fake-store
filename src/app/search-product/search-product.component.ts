import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../interface/product';
import { debounceTime } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-search-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-product.component.html',
})
export class SearchProductComponent implements OnInit {

  allProducts: Product[] = [];
  filteredProducts: Product[] = [];

  @Output()
  searchEmitter: EventEmitter<Product[]>;

  inputSearchFC: FormControl;

  constructor(public productService: ProductService) {

    this.searchEmitter = new EventEmitter<Product[]>();
    this.inputSearchFC = new FormControl('');
  }

  ngOnInit(): void {

    this.productService.getAllProducts(20, 'ASC').subscribe(
      product => this.allProducts.push(...product)
    );

    this.filteredProducts = this.allProducts;

    this.inputSearchFC.valueChanges.pipe(debounceTime(1000)).subscribe(res => {
      this.filteredProducts = this.searchProducts(this.inputSearchFC.value);
      this.searchEmitter.emit(this.filteredProducts);
    });

  }
  //Array of Product for local search, The REST API doesn't have a search endpoint
  searchProducts(productName: string | null = null): Product[] {

    this.filteredProducts = [];

    if (!productName) {
      return this.allProducts;
    }

    this.filteredProducts = this.allProducts.filter(
      (product) => product.title.toLowerCase().includes(productName!.toLowerCase())
    );

    return this.filteredProducts;
  }

}
