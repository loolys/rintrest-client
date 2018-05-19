import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { ApolloLink, concat } from "apollo-link";
import { ApolloProvider } from "react-apollo";

import Routes from "./routes";
import "./App.css";

const httpLink = new HttpLink({
  uri: "/graphql"
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: localStorage.getItem("token") || null
    }
  });
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink)
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Routes />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
