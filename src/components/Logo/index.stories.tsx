import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from '.';

export default {
  component: Logo,
  argTypes: {},
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});

export const Brand = Template.bind({});
Brand.args = {
  isBrand: true,
};

export const Title = Template.bind({});
Title.args = {
  isTitle: true,
};
