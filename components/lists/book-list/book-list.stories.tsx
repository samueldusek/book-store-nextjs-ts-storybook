import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BookList from "./book-list";

export default {
  title: "Lists/BookList",
  component: BookList,
  argTypes: {
    books: {
      control: {
        type: "object",
      },
      description: "The array of books to be listed.",
    },
    cols: {
      control: {
        type: "text",
      },
      description: "The number of columns in the list.",
    },
  },
} as ComponentMeta<typeof BookList>;

const Template: ComponentStory<typeof BookList> = (args) => (
  <BookList {...args} />
);

export const TwoColumnsList = Template.bind({});
TwoColumnsList.args = {
  books: Array(10).fill({
    id: "1",
    title: "Dummy Book",
    cover: "/images/books/1.png",
    isbn: 4294967295,
    datePublished: "2016-02-26",
    author: {
      id: "1",
      name: "Dummy Author",
    },
  }),
  cols: "2",
};

export const OneColumnList = Template.bind({});
OneColumnList.args = {
  ...TwoColumnsList.args,
  cols: "1",
};
