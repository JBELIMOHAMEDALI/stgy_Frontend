import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdemandeComponent } from './studentdemande.component';

describe('StudentdemandeComponent', () => {
  let component: StudentdemandeComponent;
  let fixture: ComponentFixture<StudentdemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
