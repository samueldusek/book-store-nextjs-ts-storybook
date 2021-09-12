import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContactForm from "./contact-form";

export default {
  title: "Forms/ContactForm",
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args) => (
  <ContactForm {...args} />
);

export const LightTheme = Template.bind({});
LightTheme.args = {
  id: "1",
  name: "Dummy Author",
  photo: "/images/authors/1.svg",
};
