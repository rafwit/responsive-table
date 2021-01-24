import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ApiService } from './services/api.service';
import { BarRatingModule } from 'ngx-bar-rating';
import { ScrollTopService } from './services/scroll-top.service';

@NgModule({
  declarations: [AppComponent, ProductListComponent, NavigationBarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BarRatingModule],
  providers: [ApiService, ScrollTopService],
  bootstrap: [AppComponent],
})
export class AppModule {}
