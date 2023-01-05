import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import * as firebase from "firebase/compat/app";
import { Observable } from "rxjs";
import {  CanActivate, Router} from '@angular/router';
import { getAuth } from "firebase/auth";
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {
  user: Observable<firebase.default.User>;

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router,
              private http: HttpClient) {
    this.user = firebaseAuth.authState;

    //console.log("User Id Token: ", localStorage.getItem('idToken'));

    this.user.subscribe(
      userInfo => {
        //console.log("User Info: ", userInfo.getIdToken())
        this.storeIdToken(userInfo.getIdToken());
      }
    );
   }
  canActivate(): boolean {
    const auth = getAuth(); //import { getAuth } from "firebase/auth";
    if(auth.currentUser){
      console.log("getAuth user:" ,auth.currentUser);
      console.log("canActivate returns true");
      return true;
    }
    this.router.navigate(['/login']);
    console.log("getAuth user:" ,auth.currentUser);
    console.log("canActivate returns false");
    return false;
  }

   storeIdToken(idToken: Promise<string>){
      idToken.then(
        id => {
          localStorage.setItem('idToken', id);
          console.log("idToken value: ", localStorage.getItem('idToken'));
        }
      );
   }

   signup(email: string, password: string, name: string){
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.registerUser(email, name);
        //this.router.navigate(['/profile/me']);
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
   }

   registerUser(email: string, name: string){
    var user: User = {
        email: email,
        id: null,
        name: name,
        profilePhotoUrl: "https://i.pinimg.com/originals/b3/b7/2c/b3b72cb8f1dbf723ecc3d33274bd315e.jpg"
      };
    this.http.post(environment.API_BASE_URL+"users", user)
      .subscribe(res => {
        console.log("Success Registration");
        this.router.navigate(['/albums/recent']);
      })
   }

   login(email: string, password: string){
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!', value);
        this.router.navigate(['/albums/recent']);
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });

   }

   logout(){
    localStorage.clear();
    this.firebaseAuth.signOut()
    console.log('User logged out');
    this.router.navigate(['/login']);
   }
}
