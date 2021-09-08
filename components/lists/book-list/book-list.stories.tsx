import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BookList from "./book-list";

export default {
  title: "Lists/BookList",
  component: BookList,
  argTypes: {
    maxBooks: {
      control: {
        type: "number",
      },
      description: "The number of books to display in the list.",
    },
    cols: {
      control: {
        type: "number",
      },
      description: "The number of columns in the list.",
    },
    hasTitle: {
      control: {
        type: "boolean",
      },
      description: "Controls whether the book list has or has not a title.",
    },
    listTitle: {
      control: {
        type: "text",
      },
      description: "Title of the list.",
    },
    books: {
      control: {
        type: "object",
      },
      description: "The array of books to be listed.",
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
  cols: 2,
  maxBooks: 10,
  hasTitle: false,
};

export const OneColumnList = Template.bind({});
OneColumnList.args = {
  ...TwoColumnsList.args,
  cols: 1,
  maxBooks: 10,
  hasTitle: false,
};
