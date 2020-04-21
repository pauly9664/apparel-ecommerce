import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmailResetPage } from './sendmail-reset.page';

describe('SendmailResetPage', () => {
  let component: SendmailResetPage;
  let fixture: ComponentFixture<SendmailResetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendmailResetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmailResetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
