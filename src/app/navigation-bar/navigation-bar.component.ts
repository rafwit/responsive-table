import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../product';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnDestroy {
  @Output() updateProductsList = new EventEmitter();
  productSubscription: Subscription = new Subscription();

  currentPage = 1;

  constructor(private apiService: ApiService) {}

  showNextPage() {
    const start = this.currentPage * 50;
    this.productSubscription = this.fillPageWithProducts(start);
    this.currentPage += 1;
  }

  showPreviousPage() {
    const start = (this.currentPage - 2) * 50;
    this.productSubscription = this.fillPageWithProducts(start);
    this.currentPage -= 1;
  }

  fillPageWithProducts(start: number): Subscription {
    return this.apiService.getProducts(start).subscribe((data: Product[]) => {
      this.updateProductsList.emit(data);
    });
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
}
