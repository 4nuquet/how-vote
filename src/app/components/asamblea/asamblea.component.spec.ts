import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsambleaComponent } from './asamblea.component';

describe('AsambleaComponent', () => {
  let component: AsambleaComponent;
  let fixture: ComponentFixture<AsambleaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsambleaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsambleaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
