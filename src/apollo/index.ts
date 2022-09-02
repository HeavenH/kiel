import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api.hiel.app/graphql',
  cache: new InMemoryCache(),
});
