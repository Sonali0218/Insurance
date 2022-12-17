import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeCurdFromComponent } from './practice-curd-from.component';

describe('PracticeCurdFromComponent', () => {
  let component: PracticeCurdFromComponent;
  let fixture: ComponentFixture<PracticeCurdFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeCurdFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeCurdFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
