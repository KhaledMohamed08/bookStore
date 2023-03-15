import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatigoryListComponent } from './catigory-list.component';

describe('CatigoryListComponent', () => {
  let component: CatigoryListComponent;
  let fixture: ComponentFixture<CatigoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatigoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatigoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
