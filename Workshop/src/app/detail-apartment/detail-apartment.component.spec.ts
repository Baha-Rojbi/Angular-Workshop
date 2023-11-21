import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailApartmentComponent } from './detail-apartment.component';

describe('DetailApartmentComponent', () => {
  let component: DetailApartmentComponent;
  let fixture: ComponentFixture<DetailApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailApartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
