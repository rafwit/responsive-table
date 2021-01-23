import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';
import { Product } from '../product';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent {
  @Output() updateProductsList = new EventEmitter();

  constructor(private apiService: ApiService) {}
  currentPage = 1;

  calculateWhichProductsToFetch(currentPage: number) {
    if (currentPage === 1) return 1;
    return currentPage * 50;
  }

  showNextPage() {
    const start = this.currentPage * 50;
    this.apiService.getProducts(start).subscribe((data: Product[]) => {
      this.updateProductsList.emit(data);
    });
    this.currentPage += 1;
  }

  showPreviousPage() {
    const start = (this.currentPage - 2) * 50;
    this.apiService.getProducts(start).subscribe((data: Product[]) => {
      this.updateProductsList.emit(data);
    });
    this.currentPage -= 1;
  }
}
