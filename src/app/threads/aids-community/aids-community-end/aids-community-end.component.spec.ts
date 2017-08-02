import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsCommunityEndComponent } from './aids-community-end.component';

describe('AidsCommunityEndComponent', () => {
  let component: AidsCommunityEndComponent;
  let fixture: ComponentFixture<AidsCommunityEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsCommunityEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsCommunityEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
