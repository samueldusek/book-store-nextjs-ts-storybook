import { gql } from "@apollo/client";

export const GET_ALL_BOOKS = gql`
  query allBooks($page: String!) {
    books(page: $page)
      @jsonapi(path: "/books?page[number]={args.page}&include=author") {
      id
      title
      date_published
      isbn
      author {
        id
        name
      }
    }
  }
`;

export const GET_BOOK = gql`
  query getBook($id: String!) {
    book(id: $id) @jsonapi(path: "/books/{args.id}?include=chapters,author") {
      id
      title
      date_published
      isbn
      chapters {
        id
        title
      }
      author {
        id
        name
      }
    }
  }
`;
