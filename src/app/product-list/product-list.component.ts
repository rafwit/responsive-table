import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  updatedProductsList: Product[] = [];
  show = false;

  constructor(private apiService: ApiService) {}

  receiveUpdatedProductList(data: Product[]) {
    this.updatedProductsList = data;
  }

  ngOnInit(): void {
    this.apiService.getProducts(0).subscribe((data: Product[]) => {
      console.log(data);
      this.updatedProductsList = data;
      this.show = true;
    });
  }
}
