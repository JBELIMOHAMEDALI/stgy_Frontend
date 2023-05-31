import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOffreComponent } from './all-offre.component';

describe('AllOffreComponent', () => {
  let component: AllOffreComponent;
  let fixture: ComponentFixture<AllOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
