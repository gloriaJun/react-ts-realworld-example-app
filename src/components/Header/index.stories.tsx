import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header } from './';

export default {
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});
