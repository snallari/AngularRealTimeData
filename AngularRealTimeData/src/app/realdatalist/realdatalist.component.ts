import { RealPojo } from '../models/realPojo';
import {RealdataService} from '../realdata.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-realdatalist',
  templateUrl: './realdatalist.component.html',
  styleUrls: ['./realdatalist.component.css'],
  providers: [RealdataService]
})
export class RealdatalistComponent implements OnInit {
  heros: RealPojo[];
  title = 'app';
  constructor(private heroService: RealdataService) {
    this.getHeroes();
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(res => this.heros = res)
  }

}
