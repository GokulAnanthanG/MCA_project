import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodDashboardComponent } from './hod-dashboard.component';

describe('HodDashboardComponent', () => {
  let component: HodDashboardComponent;
  let fixture: ComponentFixture<HodDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
