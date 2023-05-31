import { ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { User } from "@ncats-frontend-library/models/utils";
import { UsersFacade, logoutUser } from "@ncats-frontend-library/stores/user-store";
import { Subject } from "rxjs";
import { SocialSignOnModalComponent } from "../social-sign-on-modal/social-sign-on-modal.component";
import { RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { NgIf } from "@angular/common";

@Component({
    selector: 'ncats-frontend-library-social-sign-on-button',
    templateUrl: './social-sign-on-button.component.html',
    styleUrls: ['./social-sign-on-button.component.scss'],
    standalone: true,
    imports: [NgIf, MatMenuModule, MatIconModule, MatButtonModule, RouterLink, MatDialogModule]
})
export class SocialSignOnButtonComponent implements OnChanges, OnDestroy {

  protected ngUnsubscribe: Subject<boolean> = new Subject();

  /**
   * profile object
   */
  @Input()
  user?: User;

  photoURL = '';

  constructor(
    public dialog: MatDialog,
    public ref: ChangeDetectorRef,
    private userFacade: UsersFacade,
  ) {
  }

  ngOnChanges(change: SimpleChanges) {
    if(change['user'] && !change['user'].firstChange){
      if(this.user?.photoURL) {
        this.photoURL = this.user.photoURL;
      }
      this.dialog.closeAll()
      this.ref.detectChanges();
    }

  }

  /**
   * opens modal for user to sign in
   */
  openSignInModal() {
    this.dialog.open(SocialSignOnModalComponent, {
        height: '45vh',
        width: '35vw',
      }
    );
  }

  /**
   * sign out user
   */
  signOut(): void {
    this.userFacade.dispatch(logoutUser())
  }

  viewProfile() {
 //todo
  }

  handleMissingImage(){
    this.photoURL = '';
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }


}

