import { Link, useLoaderData } from "@remix-run/react"
import { Repository } from "../../adapter/repository";
import { DuckList, loader } from "./components/duck-list";

export default function DucksPage() {
  return (
    <div>
      <h1>These are your duckos:</h1>
      <DuckList />

      <Link to="/ducks/new-duck">Add a new duck</Link>
    </div>
  );
}

export { loader }

