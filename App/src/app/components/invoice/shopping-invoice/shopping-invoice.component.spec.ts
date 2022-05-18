import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingInvoiceComponent } from './shopping-invoice.component';

describe('ShoppingInvoiceComponent', () => {
  let component: ShoppingInvoiceComponent;
  let fixture: ComponentFixture<ShoppingInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
