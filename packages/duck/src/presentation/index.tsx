import { Link } from '@remix-run/react';
import styles from './index.css'

export default function HomePage() {
  return (
    <div>
      <h1>It's the duckos App</h1>
      
      <div className="links">
        <Link to="/peace">Is there peace?</Link>
        <Link to="/ducks/new-duck">Add a new duck</Link>
        <Link to="/ducks">See your ducks</Link>
      </div>
    </div>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}