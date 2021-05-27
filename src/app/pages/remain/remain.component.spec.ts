import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainComponent } from './remain.component';

describe('RemainComponent', () => {
  let component: RemainComponent;
  let fixture: ComponentFixture<RemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
