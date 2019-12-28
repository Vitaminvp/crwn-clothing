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
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
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
