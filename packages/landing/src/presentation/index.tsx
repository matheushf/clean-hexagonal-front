import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import Title from './components/title/title';
import Button from './components/button/button';
import indexStyle from './index.scss';

export default component$(() => {
  useStylesScoped$(indexStyle);

  return (
    <div className="container">
      <div className="container-title">
        <Title type="primary">CLEAN</Title>
        <Title type="primary">FRONTEND</Title>
        <Title type="primary">ARCHITECTURE</Title>
      </div>

      <div className="container-nav">
        <Link>
          <Button>Cats</Button>
        </Link>

        <Link>
          <Button>Dogs</Button>
        </Link>

        <Link>
          <Button>About</Button>
        </Link>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
