import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodLoginComponent } from './hod-login.component';

describe('HodLoginComponent', () => {
  let component: HodLoginComponent;
  let fixture: ComponentFixture<HodLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
