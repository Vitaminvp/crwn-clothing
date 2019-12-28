import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/Shop";
import Header from "./components/Header";
import SignInAndUp from "./pages/SignInAndUp";
import { auth, createUserProfileDocument } from "./firebase/utils";
import { setCurrentUser } from "./redux/user/action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/selectors";
import Checkout from "./pages/CheckOut/Checkout";
import { selectCollectionsForPreview } from "./redux/shop/selectors";
// import { addCollectionAndDocuments } from "./firebase/utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
