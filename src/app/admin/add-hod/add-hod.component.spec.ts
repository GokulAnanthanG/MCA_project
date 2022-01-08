import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHodComponent } from './add-hod.component';

describe('AddHodComponent', () => {
  let component: AddHodComponent;
  let fixture: ComponentFixture<AddHodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
