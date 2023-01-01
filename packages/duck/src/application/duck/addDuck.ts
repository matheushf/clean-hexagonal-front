import { ActionArgs } from "@remix-run/node";
import { Repository } from "../../adapter/repository";
import { DuckE } from "../../domain/entity";

export async function addDuckAction({ request }: ActionArgs) {
  const formData = await request.formData();
  const duckData = Object.fromEntries(formData) as unknown as DuckE;
  const ducks = await Repository.duck.getDucks();

  await Repository.duck.addDuck([...ducks, duckData]);

  return true;
}