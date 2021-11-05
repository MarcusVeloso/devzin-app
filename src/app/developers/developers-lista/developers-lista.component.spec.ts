import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersListaComponent } from './developers-lista.component';

describe('DevelopersListaComponent', () => {
  let component: DevelopersListaComponent;
  let fixture: ComponentFixture<DevelopersListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopersListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
