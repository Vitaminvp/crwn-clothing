import React from "react";
import { Route } from "react-router-dom";
import { CollectionOverview } from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../Collection/Collection";
import {
  convertCollectionsSnapshotToMap,
  firestore
} from "../../firebase/utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/actions";
import WithSpinner from "../../components/WithSpinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class PureShopPage extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
        <div className='shop-page'>
          <Route
              exact
              path={`${match.path}`}
              render={props => (
                  <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
              )}
          />
          <Route
              path={`${match.path}/:collectionId`}
              render={props => (
                  <CollectionPageWithSpinner isLoading={loading} {...props} />
              )}
          />
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export const ShopPage = connect(
  null,
  mapDispatchToProps
)(PureShopPage);
