import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FofoComponent } from './fofo.component';

describe('FofoComponent', () => {
  let component: FofoComponent;
  let fixture: ComponentFixture<FofoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FofoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FofoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
