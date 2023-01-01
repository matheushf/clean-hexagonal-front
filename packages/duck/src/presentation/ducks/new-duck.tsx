import { Form, Link, useTransition as useNavigation } from '@remix-run/react';
import { addDuckAction } from '../../application/duck/addDuck';
import { DuckList, loader } from './components/duck-list';

export default function NewDuckPage() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

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

export { loader, addDuckAction as action };
