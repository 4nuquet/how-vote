import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JalComponent } from './jal.component';

describe('JalComponent', () => {
  let component: JalComponent;
  let fixture: ComponentFixture<JalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
