import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroComponent } from './heroes/hero/hero.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { VillainComponent } from './villains/villain/villain.component';
import { VillainListComponent } from './villains/villain-list/villain-list.component';
import { LoginComponent } from "app/login/login.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'heroes',
    children: [
      {
        path: 'hero/:id',
        component: HeroComponent
      },
      {
        path: 'hero-list',
        component: HeroListComponent
      },
      {
        path: '**',
        redirectTo: 'hero-list',
      }
    ]
  },
  {
    path: 'villains',
    children: [
      {
        path: 'villain/:id',
        component: VillainComponent
      },
      {
        path: 'villain-list',
        component: VillainListComponent
      },
      {
        path: '**',
        redirectTo: 'villain-list',
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
