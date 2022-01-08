import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailPassComponent } from './fail-pass.component';

describe('FailPassComponent', () => {
  let component: FailPassComponent;
  let fixture: ComponentFixture<FailPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
