import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReqComponent } from './student-req.component';

describe('StudentReqComponent', () => {
  let component: StudentReqComponent;
  let fixture: ComponentFixture<StudentReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
