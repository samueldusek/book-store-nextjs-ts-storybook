import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainBookCard from "./main-book-card";

export default {
  title: "Cards/MainBookCard",
  component: MainBookCard,
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "The id of the book.",
    },
    title: {
      control: {
        type: "text",
      },
      description: "The title of the book.",
    },
    cover: {
      control: {
        type: "text",
      },
      description:
        "The absolute path to the books's cover from the static folder.",
    },
    isbn: {
      control: {
        type: "number",
      },
      description: "The isbn of the book.",
    },
    datePublished: {
      control: {
        type: "date",
      },
      description: "The date when the book was published.",
    },
    author: {
      control: {
        type: "object",
      },
      description:
        "Object containing information (name and id) about the author.",
    },
    chapters: {
      control: {
        type: "object",
      },
      description:
        "Array of objects containing information (title and id) about all the book's chapters.",
    },
  },
} as ComponentMeta<typeof MainBookCard>;

const Template: ComponentStory<typeof MainBookCard> = (args) => (
  <MainBookCard {...args} />
);

export const LightTheme = Template.bind({});
LightTheme.args = {
  id: "1",
  title: "Dummy Book",
  cover: "/images/books/1.png",
  isbn: 4294967295,
  datePublished: "2016-02-26",
  author: {
    id: "1",
    name: "Dummy Author",
  },
  chapters: [
    {
      id: "1",
      title: "Chapter 123",
    },
  ],
};
