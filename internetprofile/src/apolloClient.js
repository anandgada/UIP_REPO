import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const httpLink = createHttpLink({
  uri: "http://localhost:1337/graphql",
});

const auth = setContext((_, { headers, ...others }) => {
  console.log(_, others, "asa");
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLinks = onError(({ graphQLErrors, networkError }) => {
  // if (graphQLErrors) {
  //   graphQLErrors.forEach((error) => {
  //     console.log(error, "E");
  //   });
  // }
  if (networkError) {
    console.log(networkError.statusCode);
    if (networkError.statusCode === 401) {
      window.localStorage.clear();
      window.location.reload();
    }
  }
});

export const client = new ApolloClient({
  link: from([errorLinks, auth.concat(httpLink)]),
  cache: new InMemoryCache(),
});
