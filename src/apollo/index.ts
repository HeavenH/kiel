import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://kiew-env.eba-vempvxdm.us-east-1.elasticbeanstalk.com/graphql',
  cache: new InMemoryCache(),
});
