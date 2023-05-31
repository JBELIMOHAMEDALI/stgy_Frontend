import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionCompnyComponent } from './decision-compny.component';

describe('DecisionCompnyComponent', () => {
  let component: DecisionCompnyComponent;
  let fixture: ComponentFixture<DecisionCompnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionCompnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionCompnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
