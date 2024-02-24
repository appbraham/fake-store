import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

export const routes: Routes = [
  { path: '', component:HomeComponent, title:'FakeStore Home Page' },
  { path: 'product/:id', component:DetailProductComponent, title: 'Detail Product' },
];
