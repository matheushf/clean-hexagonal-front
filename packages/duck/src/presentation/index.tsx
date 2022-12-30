import { Link } from "@remix-run/react";

export default function HomePage() {
  return (
    <div>
      <h1>It's the duckos App</h1>
      <Link to="/peace">Is there peace?</Link>
    </div>
  );
}
