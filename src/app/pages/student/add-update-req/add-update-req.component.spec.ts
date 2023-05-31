import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateReqComponent } from './add-update-req.component';

describe('AddUpdateReqComponent', () => {
  let component: AddUpdateReqComponent;
  let fixture: ComponentFixture<AddUpdateReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
