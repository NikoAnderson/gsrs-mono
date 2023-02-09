import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from "@angular/core";
import { Disease } from "@ncats-frontend-library/models/rdas";

@Component({
  selector: 'ncats-frontend-library-disease-display',
  templateUrl: './disease-display.component.html',
  styleUrls: ['./disease-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DiseaseDisplayComponent implements OnChanges {
  @Input() disease!: Disease;
  @Output() optionsChange: EventEmitter<{variables: { [key: string]: unknown }, origin: string}> =
    new EventEmitter<{variables: { [key: string]: unknown }, origin: string}>();

  constructor(
    private changeRef: ChangeDetectorRef
  ) {
  }

  ngOnChanges() {
    this.changeRef.markForCheck()
  }

  pageList(event: {offset:number}, pageField: string, origin: string): void {
    const variables: { [key: string]: unknown } = {};
    variables[pageField] = event;
    this.optionsChange.emit({variables, origin});
  }

}
