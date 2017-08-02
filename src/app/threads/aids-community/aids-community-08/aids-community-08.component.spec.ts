import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsCommunity08Component } from './aids-community-08.component';

describe('AidsCommunity08Component', () => {
  let component: AidsCommunity08Component;
  let fixture: ComponentFixture<AidsCommunity08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsCommunity08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsCommunity08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
