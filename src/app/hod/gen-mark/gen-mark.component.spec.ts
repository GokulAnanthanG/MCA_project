import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenMarkComponent } from './gen-mark.component';

describe('GenMarkComponent', () => {
  let component: GenMarkComponent;
  let fixture: ComponentFixture<GenMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenMarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
