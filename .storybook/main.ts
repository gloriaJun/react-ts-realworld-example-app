import type { StorybookConfig } from '@storybook/react/types';

const config: StorybookConfig = {
  logLevel: 'debug',
  features: {
    previewCsfV3: true,
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  typescript: {
    check: true,
    checkOptions: {},
    // reactDocgenTypescriptOptions: {
    //   propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    // },
  },
};

module.exports = config;
