import {Hero} from '../saiservices/hero';
import {SaiService} from '../saiservices/sai.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sai',
  templateUrl: './sai.component.html',
  styleUrls: ['./sai.component.css'],
  providers: [SaiService]
})
export class SaiComponent implements OnInit {
  heros: Hero[];
  title = 'app';
  constructor(private heroService: SaiService) {
    this.getHeroes();
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heros = heroes);
  }

}
