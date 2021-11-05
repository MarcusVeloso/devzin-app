import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersEditarComponent } from './developers-editar.component';

describe('DevelopersEditarComponent', () => {
  let component: DevelopersEditarComponent;
  let fixture: ComponentFixture<DevelopersEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopersEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
