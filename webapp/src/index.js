import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import AppRouter from './routes';
import { client } from './network/apollo-client';

ReactDOM.render(
  <div data-app-init="">
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  </div>,
  document.getElementById('react-app')
);
