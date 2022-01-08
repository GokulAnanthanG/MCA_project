import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMarkComponent } from './view-mark.component';

describe('ViewMarkComponent', () => {
  let component: ViewMarkComponent;
  let fixture: ComponentFixture<ViewMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
