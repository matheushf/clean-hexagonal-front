import { ActionArgs, json } from "@remix-run/node";
import Index from '../../presentation/peace';

export default Index;

export async function action() {
}

export function loader() {
  return json({})
}