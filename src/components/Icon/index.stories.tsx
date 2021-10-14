import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon, iconTypes } from '.';

export default {
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'compose',
};

export const IconTypes = () => {
  return (
    <ul>
      {iconTypes.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
          <span>&nbsp;{icon}</span>
        </li>
      ))}
    </ul>
  );
};
