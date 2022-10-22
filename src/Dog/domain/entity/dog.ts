export interface DogI {
  name: string;
  origin: string;
}

export default class DogE {
  constructor(readonly dog: DogI) {}

  getName() {
    return this.dog.name;
  }
}
