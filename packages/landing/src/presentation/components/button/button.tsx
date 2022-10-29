import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import button from './button.scss';

export default component$(() => {
  useStylesScoped$(button);

  return (
    <button className='primary'>
      <Slot />
    </button>
  );
});
