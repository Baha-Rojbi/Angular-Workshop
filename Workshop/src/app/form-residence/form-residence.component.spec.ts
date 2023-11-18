import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResidenceComponent } from './form-residence.component';

describe('FormResidenceComponent', () => {
  let component: FormResidenceComponent;
  let fixture: ComponentFixture<FormResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResidenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
