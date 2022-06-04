import React from 'react';
import createRoot from 'react-dom';
import './index.css';
import App from './App';

import {

  ApolloClient,
  InMemoryCache,
  ApolloProvider
  

} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
})

createRoot.render(
<ApolloProvider client = {client}>
  

    <App />,

    </ApolloProvider>,

  

  document.getElementById('root'),

);



