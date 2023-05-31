import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillesOffreStudentComponent } from './detailles-offre-student.component';

describe('DetaillesOffreStudentComponent', () => {
  let component: DetaillesOffreStudentComponent;
  let fixture: ComponentFixture<DetaillesOffreStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillesOffreStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillesOffreStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
