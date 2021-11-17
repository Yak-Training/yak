import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/ckv72x2ho50t801xl47jpflk2/master',
  cache: new InMemoryCache(),
});

export default client;
