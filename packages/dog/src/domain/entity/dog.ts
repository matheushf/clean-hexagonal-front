import { getFavoriteDog } from '../services';
import { FavoriteDogE } from './favoriteDog';

export class DogE {
  constructor(
    readonly name: string,
    readonly breed: string,
    readonly breed_group: string,
    readonly temperament: string,
    readonly id: number,
    readonly origin: string,
    readonly reference_image_id: string,
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
