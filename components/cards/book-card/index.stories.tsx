import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BookCard from './index';

export default {
  title: 'BookCard',
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => <BookCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary Card',
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Secondary Card',
};