import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOffreCompanyComponent } from './info-offre-company.component';

describe('InfoOffreCompanyComponent', () => {
  let component: InfoOffreCompanyComponent;
  let fixture: ComponentFixture<InfoOffreCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoOffreCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoOffreCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
