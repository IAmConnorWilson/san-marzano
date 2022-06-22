import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

let apolloClient: ApolloClient<NormalizedCacheObject>;

export const getApolloClient = (
  ctx?: any,
  initialState?: NormalizedCacheObject
) => {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_APOLLO_URL ?? "/api/graphql",
  });

  // Log any GraphQL errors or network error that occurred
  const errorLink = onError((error) => {
    const { graphQLErrors } = error;

    if (graphQLErrors) {
      graphQLErrors.forEach((graphQLError) => {
        const { extensions } = graphQLError;
        console.error(extensions);
      });
    }
  });

  const authLink = setContext(async (_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
      },
    };
  });

  const sanMarzanoApolloLink = ApolloLink.from([authLink, errorLink, httpLink]);

  return new ApolloClient({
    ssrMode: Boolean(ctx), // set to true for SSR
    link: sanMarzanoApolloLink,
    cache: new InMemoryCache().restore(initialState || {}),
  });
};

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? getApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export const useApollo = (initialState: any) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
