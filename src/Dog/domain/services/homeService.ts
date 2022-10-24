import i18n from '../../infra/i18n';
import type { DogE, FavoriteDogE } from '../entity';

export function getFavoriteLabel(dog: DogE, favouriteDogs?: FavoriteDogE[]) {
  return dog.isFavourite(favouriteDogs) ? i18n.t('home:starredButton') : i18n.t('home:starButton');
}

export function getFavoriteDog(dog: DogE, favoriteDogs?: FavoriteDogE[]) {
  return favoriteDogs?.find((favoriteDog) => favoriteDog.image_id === dog.image.id);
}
