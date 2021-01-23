import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
