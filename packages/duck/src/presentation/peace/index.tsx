import { Form } from "@remix-run/react";

export default function PeacePage() {
  return (
    <div>
      <h1>There never was peace!</h1>

      <Form method="post">
        <button>Is there peace now?</button>
      </Form>
    </div>
  );
}
