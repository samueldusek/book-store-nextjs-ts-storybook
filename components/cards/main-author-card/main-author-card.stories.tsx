import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainAuthorCard from "./main-author-card";

export default {
  title: "Cards/MainAuthorCard",
  component: MainAuthorCard,
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
    birthplace: {
      control: {
        type: "text",
      },
      description: "The author's birth place.",
    },
    dateOfBirth: {
      control: {
        type: "date",
      },
      description: "The author's birth date.",
    },
    dateOfDeath: {
      control: {
        type: "date",
      },
      description: "The author's death date.",
    },
  },
} as ComponentMeta<typeof MainAuthorCard>;

const Template: ComponentStory<typeof MainAuthorCard> = (args) => (
  <MainAuthorCard {...args} />
);

export const LightTheme = Template.bind({});
LightTheme.args = {
  id: "1",
  name: "Dummy Author",
  photo: "/images/authors/1.svg",
  birthplace: "Costa Rica",
  dateOfBirth: "2016-02-26",
  dateOfDeath: "2017-02-26",
};
