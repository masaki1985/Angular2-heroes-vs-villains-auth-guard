import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Heroes vs. Villains';
  loginState$;  // 現在のログイン状態を保持 { Observable<boolean> } 

  constructor(
    private router: Router,
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
  gotoLogin(): void { }

  /**
   * ログアウトする
   * @returns { void }
   */
  logout(): void { }

}
