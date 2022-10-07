import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { slideInOutAnimation } from "./header-animation";

export interface LinkTemplateProperty {
  link?: string;
  label?: string;
  children?: LinkTemplateProperty[];
  external?: boolean;
}

@Component({
  selector: 'ncats-frontend-library-header-template',
  templateUrl: './header-template.component.html',
  styleUrls: ['./header-template.component.scss'],
  animations: [slideInOutAnimation],
  encapsulation: ViewEncapsulation.None

})
export class HeaderTemplateComponent {
  /**
   * animation state changed by scrolling
   * @type {string}
   */
  @Input() animationState = 'in';

  @Input() title?: string;

  @Input() links?: LinkTemplateProperty[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  /**
   * sets active section in nav
   * todo: this probably won't work in longer url paths
   * @param path
   */
  isActive(path: string | undefined): boolean {
    return this.router.url === `/${path}`;
  }
}

