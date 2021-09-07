import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navbar from "./navbar";

export default {
  title: "Layout/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {};
