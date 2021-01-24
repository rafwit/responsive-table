import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../product';
import { ApiService } from '../services/api.service';
import { ScrollTopService } from '../services/scroll-top.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  updatedProductsList: Product[] = [];
  show = false;

  productSubscription: Subscription = new Subscription();

  constructor(private apiService: ApiService, private scrollToTopService: ScrollTopService) {}

  receiveUpdatedProductList(data: Product[]) {
    this.updatedProductsList = data;
  }

  ngOnInit(): void {
    this.productSubscription = this.apiService.getProducts(0).subscribe((data: Product[]) => {
      this.updatedProductsList = data;
      this.scrollToTopService.setScrollTop();
      this.show = true;
    });
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
}
