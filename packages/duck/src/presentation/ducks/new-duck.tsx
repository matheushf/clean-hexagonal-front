import { Form } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Add your ducko here</h1>

      <Form method="post">
        <label htmlFor="name"></label>
        <input type="text" name="name" id="name" />
        <button>Add ducko</button>
      </Form>
    </div>
  );
}
