import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AuthorList from "./author-list";

export default {
  title: "Lists/AuthorList",
  component: AuthorList,
  argTypes: {
    maxAuthors: {
      control: {
        type: "number",
      },
      description: "The number of authors to display in the list.",
    },
    cols: {
      control: {
        type: "number",
      },
      description: "The number of columns in the list.",
    },
    authors: {
      control: {
        type: "object",
      },
      description: "The array of authors to be listed.",
    },
  },
} as ComponentMeta<typeof AuthorList>;

const Template: ComponentStory<typeof AuthorList> = (args) => (
  <AuthorList {...args} />
);

export const TwoColumnsList = Template.bind({});
TwoColumnsList.args = {
  authors: Array(10).fill({
    id: "1",
    name: "Dummy Author",
    photo: "/images/authors/1.svg",
  }),
  cols: 2,
  maxAuthors: 10,
};

export const OneColumnList = Template.bind({});
OneColumnList.args = {
  ...TwoColumnsList.args,
  cols: 1,
  maxAuthors: 10,
};
