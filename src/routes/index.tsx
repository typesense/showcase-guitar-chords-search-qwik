import { component$ } from '@builder.io/qwik';

import type { DocumentHead } from '@builder.io/qwik-city';
import Heading from '~/components/Heading/Heading';
import useInstantSearch from '~/hooks/useInstantSearch';

export default component$(() => {
  useInstantSearch();
  return (
    <div class='search_main'>
      <Heading />
      <div id='flex_row'>
        <aside class='SearchAndFilter'>
          <h2>Key</h2>
          <div id='key_refinementList'></div>
          <h2>Suffix</h2>
          <div id='suffix_refinementList'></div>
          <h2>Capo</h2>
          <div id='capo_refinementList'></div>
        </aside>
        <div id='infiniteHits'></div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
