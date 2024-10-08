import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTemplateComponent } from './footer-template.component';

describe('FooterTemplateComponent', () => {
  let component: FooterTemplateComponent;
  let fixture: ComponentFixture<FooterTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
