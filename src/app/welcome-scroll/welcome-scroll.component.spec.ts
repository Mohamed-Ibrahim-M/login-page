import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeScrollComponent } from './welcome-scroll.component';

describe('WelcomeScrollComponent', () => {
  let component: WelcomeScrollComponent;
  let fixture: ComponentFixture<WelcomeScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
