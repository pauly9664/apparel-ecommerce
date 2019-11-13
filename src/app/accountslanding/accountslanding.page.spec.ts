import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountslandingPage } from './accountslanding.page';

describe('AccountslandingPage', () => {
  let component: AccountslandingPage;
  let fixture: ComponentFixture<AccountslandingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountslandingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountslandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
