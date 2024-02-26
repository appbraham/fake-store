import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component:HomeComponent,title:'FakeStore Home Page' },
  { path: 'product/:id', component:DetailProductComponent, title: 'Detail Product' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent},
];
