import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct header', () => {
    expect(component.header).toBeTruthy();
    expect(component.header).toBe('Check out this amazing products');
  });

  it('schould render correct header', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.header__text').textContent).toBe(
      'Check out this amazing products',
    );
  });
});
