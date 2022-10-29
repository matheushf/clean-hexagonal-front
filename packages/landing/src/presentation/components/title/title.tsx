import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import title from './title.scss';

export default component$(({ type }: { type: 'primary' | 'secondary' | 'blue' }) => {
  useStylesScoped$(title);

  return (
    <x-sign className={type}>
      <Slot />
    </x-sign>
  );
});
