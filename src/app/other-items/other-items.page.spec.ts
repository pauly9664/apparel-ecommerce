import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherItemsPage } from './other-items.page';

describe('OtherItemsPage', () => {
  let component: OtherItemsPage;
  let fixture: ComponentFixture<OtherItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherItemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
