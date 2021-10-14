import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Navigation } from '.';

export default {
  component: Navigation,
  argTypes: {},
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 'home', text: 'Home' },
    { id: 'login', text: 'Sign in' },
  ],
};

export const IconItem = Template.bind({});
IconItem.args = {
  items: [
    { id: 'home', text: 'Home' },
    { id: 'setting', text: 'Setting', icon: 'gear-a' },
  ],
};

export const ClassName = Template.bind({});
ClassName.args = {
  className: 'navbar-nav',
  items: [
    { id: 'home', text: 'Home' },
    { id: 'setting', text: 'Setting', icon: 'gear-a' },
  ],
};
