import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";

import { User } from './user';
import { ErrorObservable } from "rxjs/observable/ErrorObservable";


@Injectable()
export class UserProfileService {

  private usersUrl = '/api/users';
  private user: User;
  users : User[];
  
  loginState$: BehaviorSubject<boolean>;  // ログイン状態を保持する
  
  constructor(
    private http: Http,
    private router: Router,
  ) {
      this.loginState$ = new BehaviorSubject(false);
    }
  
  /**
   * ログインする  
   * ユーザ情報をすべて取得し、その中の一つがLoginRequestの内容と一致したらloginStateをtrueにする  
   * 一致するものが一つもなかった場合はエラーを返す
   * @param request 
   * @returns { Observable<void | ErrorObservable> }
   */
  login(request: LoginRequest): Observable<void | ErrorObservable> {
    
    var isEqual = function(element, index: number, array: User[]) {
      return (element.email === request.email && element.password === request.password)
    };

    return this.getUsers().map(users => {
      this.users = users;
      if(this.users.some(isEqual)) {
        this.loginState$.next(true);
        console.log("OK");
        return null;
      }
      this.loginState$.next(false);
      console.log("NG");
      return Observable.create(Observable.throw);
    });
    
  }

  /**
   * ログアウトする 
   * loginState$をfalseにし、ログイン画面に遷移する
   * @returns { void }
   */
  logout(): void {
    this.loginState$.next(false);
    this.router.navigateByUrl('/login');
  }

  getUsers(): Observable<User[]> {
    //return this.http.get(this.usersUrl).map(res => res.json().data).subscribe(users =>  this.users = users);
    return this.http.get(this.usersUrl).map(res => res.json().data as User[]);
  }
  
}

export interface LoginRequest {
  email: string;
  password: string;
}