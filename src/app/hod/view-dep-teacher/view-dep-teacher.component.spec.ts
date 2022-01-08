import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDepTeacherComponent } from './view-dep-teacher.component';

describe('ViewDepTeacherComponent', () => {
  let component: ViewDepTeacherComponent;
  let fixture: ComponentFixture<ViewDepTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDepTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDepTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
