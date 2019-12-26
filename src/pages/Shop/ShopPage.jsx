import React from "react";
import { Route } from "react-router-dom";
import { CollectionOverview } from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../Collection/Collection"

export const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);
