import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from './user';

@Injectable()
export class UserProfileService {

  private usersUrl = '/api/users';
  private user: User;
  loginState$: BehaviorSubject<boolean>;  // ログイン状態を保持する

  constructor(
    private http: Http,
  ) { }

  /**
   * ログインする  
   * ユーザ情報をすべて取得し、その中の一つがLoginRequestの内容と一致したらloginStateをtrueにする  
   * 一致するものが一つもなかった場合はエラーを返す
   * @param request 
   * @returns { Observable<void | ErrorObservable> }
   */
  login(request: LoginRequest) {
    console.log(2);
    this.http.get(this.usersUrl).map(res => console.log(res));
  }

  /**
   * ログアウトする 
   * loginState$をfalseにし、ログイン画面に遷移する
   * @returns { void }
   */
  logout(): void { }

}

export interface LoginRequest {
  email: string;
  password: string;
}