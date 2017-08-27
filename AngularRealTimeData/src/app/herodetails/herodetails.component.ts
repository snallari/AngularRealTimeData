
import { Hero } from '../models/hero';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css']
})

export class HerodetailsComponent implements OnInit {

  @Input() hero: Hero;


  constructor() {}

  ngOnInit() {
  }

}
