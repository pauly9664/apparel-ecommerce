import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesPage } from './shoes.page';

describe('ShoesPage', () => {
  let component: ShoesPage;
  let fixture: ComponentFixture<ShoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
