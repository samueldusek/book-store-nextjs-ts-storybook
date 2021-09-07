import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer from "./footer";

export default {
  title: "Layout/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {};
