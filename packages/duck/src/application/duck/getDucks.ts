import { Repository } from "../../adapter/repository";

export async function getDucksLoader() {
  const ducks = await Repository.duck.getDucks();
  return ducks
}