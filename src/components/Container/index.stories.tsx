import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container } from '.';

export default {
  component: Container,
  argTypes: {
    children: { defaultValue: 'Hello!!! World!!!!' },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});

export const Page = Template.bind({});
Page.args = {
  isPage: true,
};
