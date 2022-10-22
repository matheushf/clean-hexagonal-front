import { getFavoriteDog } from '../services/homeService';
import { FavoriteDogE } from './favoriteDog';

export class DogE {
  constructor(
    readonly name: string,
    readonly origin: string,
    readonly image: {
      id: string;
      width: number;
      height: number;
      url: string;
    },
  ) {}

  getName() {
    return this.name;
  }

  isFavourite(favoriteDogs?: FavoriteDogE[]) {
    return !!getFavoriteDog(this, favoriteDogs);
  }
}
