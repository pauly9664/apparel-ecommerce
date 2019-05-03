import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitsPage } from './suits.page';

describe('SuitsPage', () => {
  let component: SuitsPage;
  let fixture: ComponentFixture<SuitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
