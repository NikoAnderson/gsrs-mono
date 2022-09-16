import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'ncats-frontend-library-unsubscribe-modal',
  templateUrl: './unsubscribe-modal.component.html',
  styleUrls: ['./unsubscribe-modal.component.scss']
})
export class UnsubscribeModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
}
