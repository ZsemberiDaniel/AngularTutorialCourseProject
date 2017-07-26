import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

export class AuthService {

    private _user: firebase.User;
    get username(): string { return this._user.email; }

    private _token: string;
    get token(): string { return this._token; }

    get isAuthenticated(): boolean { return this._user != null && this._token != null; }

    /**
     * Called when the user's sign in status is changed. Only called when the
     * user and the token is reachable.
     */
    onSigninStatusChanged: Subject<boolean> = new Subject();

    constructor() {
        firebase.auth().onAuthStateChanged(
            (user) => {
                this._user = user;

                // we could log in
                if (user) {
                    user.getIdToken().then((token) => {
                        this._token = token;
                        this.callAuthStateCallbacks(this.isAuthenticated);
                    });
                } else {
                    this._token = null;
                    this.callAuthStateCallbacks(false);
                }
            }
        );
    }

    private callAuthStateCallbacks(authenticated: boolean) {
        this.onSigninStatusChanged.next(this.isAuthenticated);
    }

    signUpUser(email: string, password: string): firebase.Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    signInUser(email: string, password: string): firebase.Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    logOut() {
        firebase.auth().signOut();
    }
}
