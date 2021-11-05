import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersFormComponent } from './developers-form.component';

describe('DevelopersFormComponent', () => {
  let component: DevelopersFormComponent;
  let fixture: ComponentFixture<DevelopersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
