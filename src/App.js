import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/Shop";
import Header from "./components/Header";
import SignInAndUp from "./pages/SignInAndUp";
import { createStructuredSelector } from "reselect";
import Checkout from "./pages/CheckOut/Checkout";
import { selectCurrentUser } from "./redux/user/selectors";
import { checkUserSession } from "./redux/user/action";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/login" component={SignInAndUp} />
        <Route
          exact
          path="/login"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInAndUp />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
