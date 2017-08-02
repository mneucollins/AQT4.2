import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsCommunity06Component } from './aids-community-06.component';

describe('AidsCommunity06Component', () => {
  let component: AidsCommunity06Component;
  let fixture: ComponentFixture<AidsCommunity06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsCommunity06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsCommunity06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
