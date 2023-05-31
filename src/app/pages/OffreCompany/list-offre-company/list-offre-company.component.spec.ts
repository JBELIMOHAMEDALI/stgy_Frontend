import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOffreCompanyComponent } from './list-offre-company.component';

describe('ListOffreCompanyComponent', () => {
  let component: ListOffreCompanyComponent;
  let fixture: ComponentFixture<ListOffreCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOffreCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOffreCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
