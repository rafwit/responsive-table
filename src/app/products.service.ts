import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private BASE_URL = environment.products_api_url;

  constructor(public http: HttpClient) {}

  getProducts(start: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}${start}`);
  }

  calculateWhichProductsToFetch(currentPage: number) {
    return currentPage * 50;
  }
}
