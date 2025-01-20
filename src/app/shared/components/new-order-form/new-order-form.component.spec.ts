import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderFormComponent } from './new-order-form.component';

describe('NewOrderFormComponent', () => {
  let component: NewOrderFormComponent;
  let fixture: ComponentFixture<NewOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewOrderFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
