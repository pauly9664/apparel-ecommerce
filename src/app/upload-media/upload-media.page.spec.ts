import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMediaPage } from './upload-media.page';

describe('UploadMediaPage', () => {
  let component: UploadMediaPage;
  let fixture: ComponentFixture<UploadMediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMediaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
