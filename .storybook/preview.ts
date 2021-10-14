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
