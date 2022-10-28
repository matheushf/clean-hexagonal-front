import { CatE } from '../entity/cat';

export interface CatRepositoryI {
  getCats: () => Promise<CatE[]>;
}
