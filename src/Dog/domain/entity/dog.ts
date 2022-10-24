import { getFavoriteDog } from '../services';
import { FavoriteDogE } from './favoriteDog';

export class DogE {
  constructor(
    readonly name: string,
    readonly id: number,
    readonly origin: string,
    readonly image: {
      id: string;
      width: number;
      height: number;
      url: string;
    },
  ) {}

  isFavourite(favoriteDogs?: FavoriteDogE[]) {
    return !!getFavoriteDog(this, favoriteDogs);
  }
}
