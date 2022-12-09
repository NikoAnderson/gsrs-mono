import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, Input, OnInit } from "@angular/core";
import { ClinicalTrial } from "@ncats-frontend-library/models/rdas";

@Component({
  selector: 'ncats-frontend-library-clinical-trials-list-card',
  templateUrl: './clinical-trials-list-card.component.html',
  styleUrls: ['./clinical-trials-list-card.component.scss']
})
export class ClinicalTrialsListCardComponent implements OnInit {
  @Input() trial!: ClinicalTrial;
  /**
   * truncated summary text
   */
  truncatedSummary = '';

  /**
   * boolean to show full or truncated summary
   */
  fullSummary = true;
  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.fullSummary = true;
    this.truncatedSummary = '';
    if (this.trial.briefSummary && this.trial.briefSummary.length > 800) {
      this.fullSummary = false;
      this.truncatedSummary = this.trial.briefSummary.slice(0, 800);
    }
    if (this.breakpointObserver.isMatched('(max-width: 768px)')) {
      this.fullSummary = false;
      if (this.trial.briefSummary && this.trial.briefSummary.length > 400) {
        this.truncatedSummary = this.trial.briefSummary.slice(0, 400);
      }
    }
  }

  getTrialSummary(): string {
    return (this.trial.briefSummary && this.fullSummary) ?  this.trial.briefSummary : this.truncatedSummary;
  }

  getLabel(objType: string, plural: boolean = true): string {
    let ret: string = objType;
    const arr = this.trial[objType] as Array<unknown>
    if (arr) {
      if (arr && arr.length > 1) {
        ret = ret + ' (' + arr.length+')';
      }
      else if (arr && arr.length == 1 && plural) {
        ret = ret.slice(0, arr.length - 2);
      }
    }
    ret = ret
      .replace(/([A-Z])/g, (match) => ` ${match}`)
      .replace(/^./, (match) => match.toUpperCase())
      .trim()
    return ret;
  }
}

