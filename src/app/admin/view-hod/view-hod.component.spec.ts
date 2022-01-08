import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHodComponent } from './view-hod.component';

describe('ViewHodComponent', () => {
  let component: ViewHodComponent;
  let fixture: ComponentFixture<ViewHodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
