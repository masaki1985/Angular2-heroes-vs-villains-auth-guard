import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserProfileService, LoginRequest } from 'app/core/user-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Heroes vs. Villains';
  loginState$;  // 現在のログイン状態を保持 { Observable<boolean> } 
  loginRequest: LoginRequest = {
    email: 'test@samlple.com',
    password: 'abcd',
  };
  
  constructor(
    private router: Router,
    private UserProfileService: UserProfileService,
  ) { }


  gotoHeroes(): void {
    this.router.navigateByUrl('/heroes/hero-list');
  }

  gotoVillains(): void {
    this.router.navigateByUrl('/villains/villain-list');
  }

  /**
   * ログインページに遷移する
   * @returns { void }
   */
  gotoLogin(): void {
    this.router.navigateByUrl('/login');
  }

  /**
   * ログアウトする
   * @returns { void }
   */
  logout(): void { }

  test(): void {
    this.UserProfileService.login(this.loginRequest);
  }
}
