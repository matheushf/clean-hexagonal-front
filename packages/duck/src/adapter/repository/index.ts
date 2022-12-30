import { DuckFileRepository } from './duck/duckFileRepository';

function buildRepository() {
  return {
    duck: { ...DuckFileRepository() },
  };
}

export const Repository = buildRepository();
