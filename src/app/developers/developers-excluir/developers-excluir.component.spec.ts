import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersExcluirComponent } from './developers-excluir.component';

describe('DevelopersExcluirComponent', () => {
  let component: DevelopersExcluirComponent;
  let fixture: ComponentFixture<DevelopersExcluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopersExcluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
