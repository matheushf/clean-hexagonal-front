import { DuckE } from "../entity/duck";

export interface DuckRepositoryI {
  getDucks: () => Promise<DuckE[]>;
  addDuck: (ducks: DuckE[]) => void;
}
