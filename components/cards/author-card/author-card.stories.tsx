import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AuthorCard from "./author-card";

export default {
  title: "Cards/AuthorCard",
  component: AuthorCard,
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "The id of the author.",
    },
    name: {
      control: {
        type: "text",
      },
      description: "The name of the author.",
    },
    photo: {
      control: {
        type: "text",
      },
      description:
        "The absolute path to the author's photo from the static folder.",
    },
  },
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
