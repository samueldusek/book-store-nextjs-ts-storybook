import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AuthorCard from "./author-card";

export default {
  title: "Cards/AuthorCard",
  component: AuthorCard,
} as ComponentMeta<typeof AuthorCard>;

const Template: ComponentStory<typeof AuthorCard> = (args) => (
  <AuthorCard {...args} />
);

export const LightTheme = Template.bind({});
LightTheme.args = {
  id: "1",
  name: "Dummy Author",
  photo: "/images/authors/1.svg",
};
