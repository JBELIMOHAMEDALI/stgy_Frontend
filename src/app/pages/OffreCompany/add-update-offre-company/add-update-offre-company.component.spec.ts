import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateOffreCompanyComponent } from './add-update-offre-company.component';

describe('AddUpdateOffreCompanyComponent', () => {
  let component: AddUpdateOffreCompanyComponent;
  let fixture: ComponentFixture<AddUpdateOffreCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateOffreCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateOffreCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
