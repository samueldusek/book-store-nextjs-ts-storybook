import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BookCard from "./book-card";

export default {
  title: "Cards/BookCard",
  component: BookCard,
  argTypes: {
    isLoading: {
      control: {
        type: "boolean",
      },
      description: "Controls whether the content is loading or not.",
    },
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
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "500px",
          height: "250px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <BookCard {...args} />
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
  isLoading: false,
};
