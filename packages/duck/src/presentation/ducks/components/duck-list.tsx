import { Link, useLoaderData } from "@remix-run/react"
import { getDucksLoader as loader } from "packages/duck/src/application/duck/getDucks";
import { Repository } from "../../../adapter/repository";

export function DuckList() {
  const ducks = useLoaderData<[]>() || [];

  return (
    <div>
      <ul>
        {ducks?.map((duck: any) => (
          <li key={duck.name}>{duck.name}</li>
        ))}
      </ul>
    </div>
  );
}

export { loader }