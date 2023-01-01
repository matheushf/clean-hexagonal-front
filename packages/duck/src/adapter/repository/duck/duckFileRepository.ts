import fs from 'fs/promises';
import { DuckE } from 'packages/duck/src/domain/entity';
import { DuckRepositoryI } from 'packages/duck/src/domain/ports/DuckRepository';
import path from 'path';

const filepath = 'db/ducks.json';

export function DuckFileRepository(): DuckRepositoryI {
  function addDuck(ducks: DuckE[]) {
    return fs.writeFile(filepath, JSON.stringify({ ducks }));
  }

  async function getDucks() {
    const rawFileContent = await fs.readFile(filepath, { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    const storedDucks = data.ducks ?? [];

    return storedDucks;
  }

  return { addDuck, getDucks };
}
