import React, { useState, useEffect } from "react";
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
import Marker from "./components/Pin/Pin";
import Nav from "./components/Nav/Nav";
import Restroom from "./components/Restroom/restroom";
import { GoogleApiWrapper } from "google-maps-react";
import Wrapper from "./components/wrapper/wrapper"

//import { selectionSetMatchesResult } from "@apollo/client/cache/inmemory/helpers";

//import Home from './components/Home/Home'
//import Home from './pages/Home';
//import Maps from './components/Maps';
//import Detail from './pages/Detail';
//import NoMatch from './pages/NoMatch';
//import Login from './components/Login/Login';
//import Signup from './pages/Signup';
//import Nav from './components/Nav';
//import { AppProvider } from './utils/GlobalState';
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

  const [coordinates, setCoordinates] = useState({latitude:null, longitude:null});

  useEffect(() => {
    geoFindMe();
  }, []);

 
  function geoFindMe() {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude, longitude);
      setCoordinates({latitude, longitude})
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Wrapper>
          <Switch>
          <Route exact path="/"  >
          <Map latitude={coordinates.latitude} longitude={coordinates.longitude}/>
          </Route>
          <Route exact path="/Restroom" component={Restroom} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Marker" component={Marker} />
          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/Rating" component={Rating} />
          <Route exact path="/SignUp" component={SignUp} />
          </Switch>
        </Wrapper>
      </Router>
    </ApolloProvider>
  );
}

export default App;
