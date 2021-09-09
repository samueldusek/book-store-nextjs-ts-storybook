import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Pagination from "./pagination";

export default {
  title: "UI/Pagination",
  component: Pagination,
  argTypes: {
    maxPages: {
      control: {
        type: "number",
      },
      description: "Maximum number of pages.",
    },
    activePage: {
      control: {
        type: "number",
      },
      description: "Currently active page.",
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const LightTheme = Template.bind({});
LightTheme.args = {
  maxPages: 5,
  activePage: 1,
};
