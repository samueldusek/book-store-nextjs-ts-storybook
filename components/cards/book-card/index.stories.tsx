import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BookCard from "./index";

export default {
  title: "BookCard",
  component: BookCard,
  decorators: [
    (Story) => (
      <div style={{ width: "500px", height: "250px" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <BookCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  book: {
    id: "1",
    title: "Dummy Book",
    cover: "/images/books/1.png",
    isbn: "4294967295",
    datePublished: "2016-02-26",
    author: {
      id: "1",
      name: "Dummy Author",
    },
  },
};
