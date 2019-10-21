import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcejoComponent } from './concejo.component';

describe('ConcejoComponent', () => {
  let component: ConcejoComponent;
  let fixture: ComponentFixture<ConcejoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcejoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
