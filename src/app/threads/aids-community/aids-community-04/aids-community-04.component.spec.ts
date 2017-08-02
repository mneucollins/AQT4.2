import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsCommunity04Component } from './aids-community-04.component';

describe('AidsCommunity04Component', () => {
  let component: AidsCommunity04Component;
  let fixture: ComponentFixture<AidsCommunity04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsCommunity04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsCommunity04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
