import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinilosComponent } from './vinilos.component';

describe('VinilosComponent', () => {
  let component: VinilosComponent;
  let fixture: ComponentFixture<VinilosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinilosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
