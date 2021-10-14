import React from 'react';
import type { Story } from '@storybook/react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// https://github.com/storybookjs/testing-react/blob/cb0c7b2379569ef3564390de09a2d328bc475007/example/.storybook/preview.tsx

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Intro',
        'Pages',
        ['Home', 'Login', '*'],
        'Components',
        'Templates',
      ],
    },
  },
};

export const decorators = [
  // (StoryFn: Story, { globals: { locale } }) => (
  //   <>
  //     // <div>Locale: {locale}</div>
  //     <StoryFn />
  //   </>
  // ),
  (StoryFn: Story) => (
    <Router>
      <Routes>
        <Route path={'/'} element={<StoryFn />} />
      </Routes>
    </Router>
  ),
];

// export const globalTypes = {
//   locale: {
//     name: 'Locale',
//     description: 'Internationalization locale',
//     defaultValue: 'en',
//     toolbar: {
//       icon: 'globe',
//       items: [
//         { value: 'en', right: '🇺🇸', title: 'English' },
//         { value: 'es', right: '🇪🇸', title: 'Español' },
//         { value: 'pt', right: '🇧🇷', title: 'Português' },
//         { value: 'kr', right: '🇰🇷', title: '한국어' },
//       ],
//     },
//   },
// };
