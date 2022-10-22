import { DogE, FavoriteDogE } from '../entity';

export function getFavoriteLabel(dog: DogE, favouriteDogs?: FavoriteDogE[]) {
  return dog.isFavourite(favouriteDogs) ? 'Starred' : 'Star';
}

export function getFavoriteDog(dog: DogE, favoriteDogs?: FavoriteDogE[]) {
  return favoriteDogs?.find((favoriteDog) => favoriteDog.image_id === dog.image.id);
}
