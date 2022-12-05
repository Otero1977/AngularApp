import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacademicaComponent } from './formacademica.component';

describe('FormacademicaComponent', () => {
  let component: FormacademicaComponent;
  let fixture: ComponentFixture<FormacademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacademicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormacademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
