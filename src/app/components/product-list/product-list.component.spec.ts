import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/services/api.service';
import { ScrollTopService } from 'src/app/services/scroll-top.service';

import { ProductListComponent } from './product-list.component';

const apiServiceStub = {
  getProducts: () => {
    return {
      subscribe: () => {},
    };
  },
};

const ScrollTopServiceStub = {
  scrollTop: () => {},
};

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ApiService, useValue: apiServiceStub },
        { provide: ScrollTopService, useValue: ScrollTopServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
