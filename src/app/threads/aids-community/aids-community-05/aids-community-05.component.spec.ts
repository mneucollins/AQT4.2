import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsCommunity05Component } from './aids-community-05.component';

describe('AidsCommunity05Component', () => {
  let component: AidsCommunity05Component;
  let fixture: ComponentFixture<AidsCommunity05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsCommunity05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsCommunity05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
