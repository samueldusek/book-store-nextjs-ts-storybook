import { ApolloClient, InMemoryCache } from "@apollo/client";
import { JsonApiLink } from "apollo-link-json-api";

const jsonApiLink = new JsonApiLink({
  uri: "http://jsonapiplayground.reyesoft.com/v2",
});

const client = new ApolloClient({
  link: jsonApiLink,
  cache: new InMemoryCache(),
});

export default client;
