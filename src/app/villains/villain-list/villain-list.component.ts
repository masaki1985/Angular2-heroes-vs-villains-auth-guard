import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Villain } from './../shared/villain';
import { VillainService } from './../shared/villain.service';

@Component({
  selector: 'app-villain-list',
  templateUrl: './villain-list.component.html',
  styleUrls: ['./villain-list.component.css']
})
export class VillainListComponent implements OnInit {

  villains: Villain[];
  selectedVillain: Villain;
  newName: string;

  constructor(
    private router: Router,
    private villainService: VillainService
  ) { }

  ngOnInit(): void {
    this.getVillains();
  }

  getVillains(): void {
    this.villainService.getVillains()
                       .subscribe(villains => this.villains = villains);
  }

  onSelect(villain: Villain): void {
    this.selectedVillain = villain;
  }

  gotoDetail(): void {
    this.router.navigate(['/villains/villain', this.selectedVillain.id]);
  }

  add(name: string): void {
    if (!name) { return; }

    this.villainService.createVillain(name)
                       .subscribe(villain => {
                         this.villains.push(villain);
                         this.selectedVillain = null;
                         this.newName = null;
                       });
  }

}
