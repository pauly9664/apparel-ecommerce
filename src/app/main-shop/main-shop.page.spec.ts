import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShopPage } from './main-shop.page';

describe('MainShopPage', () => {
  let component: MainShopPage;
  let fixture: ComponentFixture<MainShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainShopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
