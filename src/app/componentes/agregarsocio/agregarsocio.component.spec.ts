import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarsocioComponent } from './agregarsocio.component';

describe('AgregarsocioComponent', () => {
  let component: AgregarsocioComponent;
  let fixture: ComponentFixture<AgregarsocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarsocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarsocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
