import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetsComponent } from './internets.component';

describe('InternetsComponent', () => {
  let component: InternetsComponent;
  let fixture: ComponentFixture<InternetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
