import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import '@storybook/addon-console';
// import "./storystyles.css"

const req = require.context('../src/components', true, /.stories.tsx?$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(
  withInfo({
    styles: {
      header: {
        h1: {
          marginRight: '20px',
          display: 'inline',
        },
        h2: {
          display: 'inline',
          color: '#999',
        },
      },
    },
  }),
);
addDecorator(withKnobs);

configure(loadStories, module);
