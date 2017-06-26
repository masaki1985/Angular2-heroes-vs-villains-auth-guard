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
      //TODO
      this.loginState$ = new BehaviorSubject(false);
      this.getUsers();
    }

  /**
   * ログインする  
   * ユーザ情報をすべて取得し、その中の一つがLoginRequestの内容と一致したらloginStateをtrueにする  
   * 一致するものが一つもなかった場合はエラーを返す
   * @param request 
   * @returns { Observable<void | ErrorObservable> }
   */
  login(request: LoginRequest): Observable<void | ErrorObservable> {
    for(var i = 0; i < this.users.length; i++) {
      if(request.email === this.users[i].email && request.password === this.users[i].password) {
        this.loginState$.next(true);
        //TODO Observable<void>を返す
        return;
      }
    }
    //TODO Observable<ErrorObseravable>を返す
    return;
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

  getUsers(): void {
    this.http.get(this.usersUrl).map(res => res.json().data).subscribe(users =>  this.users = users) 
  }
}

export interface LoginRequest {
  email: string;
  password: string;
}