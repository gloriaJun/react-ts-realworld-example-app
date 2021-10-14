import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Layout } from './';

export default {
  component: Layout,
  argTypes: {
    children: { defaultValue: 'Page Content' },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
