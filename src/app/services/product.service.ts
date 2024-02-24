import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly url = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  getAllProducts(limit: number, sort: string) {
    let params = new HttpParams();
    params = params.append('limit', limit);
    params = params.append('sort', sort);
    // params = params.appendAll({limit, order});

    return this.http.get<Product[]>(`${this.url}/products`, { params });
  }

  getProductById(id: number){
    return this.http.get<Product>(`${this.url}/products/${id}`);
  }

  getAllCategories(){
    return this.http.get<Category>(`${this.url}/products/categories`);
  }

  getProductsByCategory(category: string, limit: number, sort:string){
    let queryParams = new HttpParams();
    queryParams = queryParams.set('limit', limit);
    queryParams = queryParams.set('sort', sort);
    // queryParams = queryParams.appendAll({ limit, sort});

    return this.http.get<Product[]>(`${this.url}/products/category/${category}`, { params:queryParams });
  }
}
