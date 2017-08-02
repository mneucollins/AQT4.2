import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsCommunity02Component } from './aids-community-02.component';

describe('AidsCommunity02Component', () => {
  let component: AidsCommunity02Component;
  let fixture: ComponentFixture<AidsCommunity02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsCommunity02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsCommunity02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
