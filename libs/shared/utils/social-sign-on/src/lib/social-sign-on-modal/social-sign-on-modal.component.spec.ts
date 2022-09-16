import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSignOnModalComponent } from './social-sign-on-modal.component';

describe('SocialSignOnModalComponent', () => {
  let component: SocialSignOnModalComponent;
  let fixture: ComponentFixture<SocialSignOnModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialSignOnModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialSignOnModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
