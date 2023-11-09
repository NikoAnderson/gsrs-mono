import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'ncats-frontend-library-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, MatProgressSpinnerModule],
})
export class LoadingSpinnerComponent {
  @Input() isLoaded = false;
  @Input() position: 'left' | 'right' | 'center' = 'center';
  @Input() size: 'small' | 'medium' | 'large' = 'large';
  sizes = {
    large: 100,
    medium: 50,
    small: 25,
  };

  positions = {
    left: 'spinner-left',
    right: 'spinner-right',
    center: '',
  };
}
