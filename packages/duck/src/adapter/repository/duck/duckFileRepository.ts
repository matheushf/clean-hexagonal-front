import fs from 'fs/promises';
import path from 'path';

// const filepath = path.resolve(__dirname, `./ducks.json`);
const filepath = 'ducks.json';

export function DuckFileRepository() {
  function addDuck(ducks = [{}]) {
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
