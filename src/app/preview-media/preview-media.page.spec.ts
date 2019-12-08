import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewMediaPage } from './preview-media.page';

describe('PreviewMediaPage', () => {
  let component: PreviewMediaPage;
  let fixture: ComponentFixture<PreviewMediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewMediaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewMediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
