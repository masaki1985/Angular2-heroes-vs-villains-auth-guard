import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Villain } from './../shared/villain';
import { VillainService } from './../shared/villain.service';

@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.css']
})
export class VillainComponent implements OnInit {

  @Input() villain: Villain;

  constructor(
    private villainService: VillainService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.villainService.getVillain(id)
                         .subscribe(villain => this.villain = villain);
    });
  }

  goBack(): void {
    window.history.back();
  }

  save(): void {
    this.villainService.updateVillain(this.villain)
                       .subscribe(villain => this.villain = villain);
  }

  delete(): void {
    this.villainService.deleteVillain(this.villain.id)
                       .subscribe(() => this.goBack());
  }

}
