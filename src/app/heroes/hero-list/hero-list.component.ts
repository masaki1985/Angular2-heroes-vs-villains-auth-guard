import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './../shared/hero';
import { HeroService } from './../shared/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  newName: string;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
                    .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/heroes/hero', this.selectedHero.id]);
  }

  add(name: string): void {
    if (!name) { return; }

    this.heroService.createHero(name)
                    .subscribe(hero => {
                      this.heroes.push(hero);
                      this.selectedHero = null;
                      this.newName = null;
                    });
  }

}
