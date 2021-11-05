import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersNovoComponent } from './developers-novo.component';

describe('DevelopersNovoComponent', () => {
  let component: DevelopersNovoComponent;
  let fixture: ComponentFixture<DevelopersNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopersNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
