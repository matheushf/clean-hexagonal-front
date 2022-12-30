import { ActionArgs, json, redirect } from "@remix-run/node";
import { Repository } from "../../adapter/repository";
import Index from '../../presentation/ducks/new-duck';

export default Index;

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const duckData = Object.fromEntries(formData);
  const ducks = await Repository.duck.getDucks();

  console.log('oi save ', duckData, ducks)
  Repository.duck.addDuck([...ducks, duckData]);

  return redirect('/ducks')
}

export async function loader() {
  const ducks = await Repository.duck.getDucks();
  return json(ducks)
}