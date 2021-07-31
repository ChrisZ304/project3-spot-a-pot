import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Map from "./components/Map/Map";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/Signup";
import Rating from "./components/Rating/Rating";
import Marker from "./components/Marker/Marker";
import Nav from "./components/Nav/Nav";
import Restroom from "./components/Restroom/restroom";
//import Home from './components/Home/Home'
//import Home from './pages/Home';
//import Maps from './components/Maps';
//import Detail from './pages/Detail';
//import NoMatch from './pages/NoMatch';
//import Login from './components/Login/Login';
//import Signup from './pages/Signup';
//import Nav from './components/Nav';
//import { StoreProvider } from './utils/GlobalState';
//import LandingPage from './componets/LandingPAge';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          
          <Route exact path="/" component={Map} />
          <Route exact path="/Restroom" component={Restroom} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Marker" component={Marker} />
          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/Rating" component={Rating} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
