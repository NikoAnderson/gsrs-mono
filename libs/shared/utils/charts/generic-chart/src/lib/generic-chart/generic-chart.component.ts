import {
  Component, computed,
  ElementRef,
  EventEmitter, inject,
  InjectionToken,
  Input,
  Output,
  PLATFORM_ID,
  ViewChild
} from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Filter, FilterCategory } from "@ncats-frontend-library/models/utils";
import { Selection } from "d3-selection";

@Component({
  selector: 'lib-generic-chart',
  standalone: true,
  imports: [CommonModule],
  template: ''
})
export class GenericChartComponent {
  platformId: InjectionToken<NonNullable<unknown>> = inject(PLATFORM_ID) as InjectionToken<NonNullable<unknown>>;

  @ViewChild('chartElement', { static: true }) chartElement!: ElementRef;
  @Input() data!: FilterCategory;
  svg!: any // Selection<BaseType, unknown, null, undefined>;
  svgExport!: SVGElement;
  tooltip!: Selection<null, undefined, null, undefined>;
  width!: number;
  height!: number;
  margins!: {top: number, bottom: number, left: number, right: number};
  keys!: string[];
  isBrowser = computed(()=> isPlatformBrowser(this.platformId));
  @Output() readonly clickElement: EventEmitter<Filter> = new EventEmitter<Filter>();
}
