import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/actions";
import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverviewContainer";
import CollectionPageContainer from "../Collection/CollectionPageContainer";

const PureShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        componenet={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export const ShopPage = connect(
  null,
  mapDispatchToProps
)(PureShopPage);
