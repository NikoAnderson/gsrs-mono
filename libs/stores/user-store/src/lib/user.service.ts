import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { User } from "@ncats-frontend-library/models/utils";
import firebase from 'firebase/compat/app';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {from, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * list of provider objects used by the auth service
   */
  providers: Map<string, firebase.auth.AuthProvider> = new Map<string, firebase.auth.AuthProvider>([
    ['facebook', new firebase.auth.FacebookAuthProvider()],
    ['google', new firebase.auth.GoogleAuthProvider()],
    ['twitter', new firebase.auth.TwitterAuthProvider()],
    ['github', new firebase.auth.GithubAuthProvider()],
  ]);

  /**
   * get user info from firebase
   * @param userCollection
   * @param afAuth
   */
  constructor(
    private userCollection: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
  }

  /**
   * gets info from modal
   * fetch and login using the proper auth service
   * closes modal
   * @param providerName
   */
  doLogin(providerName: string): Observable<firebase.auth.UserCredential> {
      const provider: unknown = this.providers.get(providerName);
        return from(this.afAuth.signInWithPopup(<firebase.auth.AuthProvider>provider))
  }

  /*  /!**
     * registers no user
     * todo: this ins't set up in the UI
     * @param value
     * @param dialogRef
     *!/
    doRegister(value, dialogRef: MatDialogRef<any>) {
      return new Promise<any>((resolve, reject) => {
        this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
          .then(res => {
            this.fetchUserProfile(res.user);
            dialogRef.close();
          }, err => {
            console.log(err);
            reject(err);
          });
      });
    }*/

  /**
   * logout user, remove profile via profile service
   */
  logout() {
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('userEntity');
      return null;
    });
  }

  /**
   * get profile of user
   * @param user
   */
  createUserProfile(user: User) {
     this.userCollection.collection('users')
      .doc(user.uid)
      .set({...user})
  }

  updateUserProfile(user: User) {
     this.userCollection.collection('users')
      .doc(user.uid)
       .update({...user})
    return this.fetchUserProfile(user);
  }

  fetchUserProfile(user: User) {
    return  this.userCollection.collection('users')
      .doc(user.uid)
      .get().subscribe((res:any) => {
         if (!res.exists) {
           this.createUserProfile(user);
          this.fetchUserProfile(user);
           return null;
         } else {
           localStorage.removeItem('userEntity');
           localStorage.setItem('userEntity', JSON.stringify(res.data()));
           return res.data();
         }

       }
     )
  }

  /**
   * handle errors, if there are multiple accounts, or popups are blocked
   * @param error
   */
  handleError(error: any) {
    // An error happened.
    if (error.code === 'auth/account-exists-with-different-credential') {
      // Step 2.
      // User's email already exists.
      // The pending GitHub credential.
      const pendingCred = error.credential;
      // The provider account's email address.
      const email = error.email;
      // Get sign-in methods for this email.
      this.afAuth.fetchSignInMethodsForEmail(email).then((methods) => {
        // Step 3.
        // If the user has several sign-in methods,
        // the first method in the list will be the "recommended" method to use.
        /*if (methods[0] === 'password') {
          // Asks the user their password.
          // In real scenario, you should handle this asynchronously.
          const password = this.promptUserForPassword(); // TODO: implement promptUserForPassword.
          this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
            // Step 4a.
            return res.user.linkWithCredential(pendingCred);
          }).then(function(res) {
            console.log(res);
            // GitHub account successfully linked to the existing Firebase user.
            this.fetchUserProfile(res.user);
          });
          return;
        }*/
        // All the other cases are external providers.
        // Construct provider object for that provider.
        // TODO: implement getProviderForProviderId.
        const provider = this.providers.get(methods[0].split('.')[0]);
        // At this point, you should let the user know that he already has an account
        // but with a different provider, and let him validate the fact he wants to
        // sign in with this provider.
        // Sign in to provider. Note: browsers usually block popup triggered asynchronously,
        // so in real scenario you should ask the user to click on a "continue" button
        // that will trigger the signInWithPopup.
        // @ts-ignore
        this.afAuth.signInWithPopup(provider).then(result => {
          // Remember that the user may have signed in with an account that has a different email
          // address than the first one. This can happen as Firebase doesn't control the provider's
          // sign in flow and the user is free to login using whichever account he owns.
          // Step 4b.
          // Link to GitHub credential.
          // As we have access to the pending credential, we can directly call the link method.
          // @ts-ignore
          result.user.linkWithCredential(pendingCred).then(usercred => {
            // GitHub account successfully linked to the existing Firebase user.
           // this.fetchUserProfile(usercred.user);
          });
        });
      });
    }
    if (error.code === 'auth/popup-blocked') {
      alert('Please allow popups for authentication');
    }
    /*
      promptUserForPassword() {
        return '123456789'
      }*/
  }

}
