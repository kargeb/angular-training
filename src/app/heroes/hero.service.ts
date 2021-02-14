import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroes: Hero[] = HEROES;

  getHeroes() {
    return this.heroes;
  }

  constructor() {}
}
