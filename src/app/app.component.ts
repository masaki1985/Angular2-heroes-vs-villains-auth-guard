import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserProfileService, LoginRequest } from 'app/core/user-profile.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Heroes vs. Villains';
  loginState$: Observable<boolean> = this.UserProfileService.loginState$;  // 現在のログイン状態を保持 { Observable<boolean> } 
  
  constructor(
    private router: Router,
    private UserProfileService: UserProfileService,
  ) { }

  gotoHeroes(): void {
    if(!this.UserProfileService.loginState$.getValue()) {
      window.alert("ログインしてください");
      this.gotoLogin();
      return;
    }
    this.router.navigateByUrl('/heroes/hero-list');
  }

  gotoVillains(): void {
    if(!this.UserProfileService.loginState$.getValue()) {
      window.alert("ログインしてください");
      this.gotoLogin();
      return;
    }
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
  logout(): void {
    this.UserProfileService.logout();
    window.alert("ログアウトしました");
  }

}
