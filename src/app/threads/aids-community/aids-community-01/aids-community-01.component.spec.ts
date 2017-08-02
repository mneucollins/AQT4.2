import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsCommunity01Component } from './aids-community-01.component';

describe('AidsCommunity01Component', () => {
  let component: AidsCommunity01Component;
  let fixture: ComponentFixture<AidsCommunity01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsCommunity01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsCommunity01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
