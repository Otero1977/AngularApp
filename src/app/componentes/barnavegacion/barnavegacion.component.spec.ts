import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarnavegacionComponent } from './barnavegacion.component';

describe('BarnavegacionComponent', () => {
  let component: BarnavegacionComponent;
  let fixture: ComponentFixture<BarnavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarnavegacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarnavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
