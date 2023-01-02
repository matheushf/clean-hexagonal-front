import { Form, Link } from '@remix-run/react';
import { useNewDuck, addDuckAction, getDucksLoader } from '../../application/duck/';
import { DuckList } from './components/duck-list';

export default function NewDuckPage() {
  const { isSubmitting } = useNewDuck();

  return (
    <div>
      <h1>Add your ducko here</h1>

      <Form method="post">
        <label htmlFor="name"></label>
        <input type="text" name="name" id="name" />
        <button disabled={isSubmitting}>Add ducko</button>
      </Form>

      <DuckList />

      <Link to="/">Home</Link>
    </div>
  );
}

export { getDucksLoader as loader, addDuckAction as action };
