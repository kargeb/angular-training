import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from './../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor() {}

  heroes = HEROES;
  selectedHero;

  hero: Hero = {
    id: 11,
    name: 'Pies',
  };

  onSelect(hero) {
    this.selectedHero = hero;
  }

  ngOnInit(): void {}
}
