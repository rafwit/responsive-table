import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL = environment.products_api_url;

  constructor(public http: HttpClient) {}

  getProducts(start: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}${start}`);
  }
}
