import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej2FormDemoComponent } from './ej2-form-demo.component';

describe('Ej2FormDemoComponent', () => {
  let component: Ej2FormDemoComponent;
  let fixture: ComponentFixture<Ej2FormDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej2FormDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ej2FormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
