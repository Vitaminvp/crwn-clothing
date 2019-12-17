import React from "react";
import { Switch, Route } from 'react-router-dom';
import "./App.css";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/Shop";
import Header from "./components/Header";
import SignInAndUp from "./pages/SignInAndUp";


function App() {
  return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/login' component={SignInAndUp} />
        </Switch>
      </div>

  );
}

export default App;
