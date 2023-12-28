import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSepcComponent } from './product-sepc.component';

describe('ProductSepcComponent', () => {
  let component: ProductSepcComponent;
  let fixture: ComponentFixture<ProductSepcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSepcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSepcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
