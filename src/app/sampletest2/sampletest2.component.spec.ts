import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sampletest2Component } from './sampletest2.component';

describe('Sampletest2Component', () => {
  let component: Sampletest2Component;
  let fixture: ComponentFixture<Sampletest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sampletest2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sampletest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
