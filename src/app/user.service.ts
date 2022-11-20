import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import * as firebase from "firebase/compat/app";
import { Observable } from "rxjs";
import { Router, RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Observable<firebase.default.User | null>;


  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router) {
    this.user = firebaseAuth.authState;
   }

   signup(email: string, password: string){
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
      this.router.navigate(['profile']);
   }

   login(email: string, password: string){
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!', value);
        //RouterLink='/profile';
        this.router.navigate(['/profile']);
        console.log('profile page');
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });

   }

   logout(){
    this.firebaseAuth.signOut()
      .then(value => {
        console.log('User logged out', value);
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
      this.router.navigate(['login']);

   }
}
