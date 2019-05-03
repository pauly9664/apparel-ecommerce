import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsPage } from './bags.page';

describe('BagsPage', () => {
  let component: BagsPage;
  let fixture: ComponentFixture<BagsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
