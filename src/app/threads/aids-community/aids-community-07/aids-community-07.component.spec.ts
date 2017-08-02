import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsCommunity07Component } from './aids-community-07.component';

describe('AidsCommunity07Component', () => {
  let component: AidsCommunity07Component;
  let fixture: ComponentFixture<AidsCommunity07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsCommunity07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsCommunity07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
