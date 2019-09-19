import { configure } from '@storybook/react';
// import '@storybook/addon-console';
// import { withInfo } from '@storybook/addon-info';
// import { withKnobs } from '@storybook/addon-knobs';
// import "./storystyles.css"

const req = require.context('../src/components', true, /.stories.tsx?$/);

function loadStories() {
  req.keys().forEach(req);
}

// addDecorator(withInfo());
// addDecorator(withKnobs);

configure(loadStories, module);
