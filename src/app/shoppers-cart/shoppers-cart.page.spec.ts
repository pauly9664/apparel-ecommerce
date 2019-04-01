import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppersCartPage } from './shoppers-cart.page';

describe('ShoppersCartPage', () => {
  let component: ShoppersCartPage;
  let fixture: ComponentFixture<ShoppersCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppersCartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppersCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
