import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsCommunity03Component } from './aids-community-03.component';

describe('AidsCommunity03Component', () => {
  let component: AidsCommunity03Component;
  let fixture: ComponentFixture<AidsCommunity03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsCommunity03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsCommunity03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
