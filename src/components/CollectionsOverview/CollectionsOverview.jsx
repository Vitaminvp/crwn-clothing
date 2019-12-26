import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../CollectionPreview";

import { selectCollectionsForPreview } from "../../redux/shop/selectors";

import "./CollectionsOverview.scss";

const PureCollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export const CollectionOverview = connect(mapStateToProps)(PureCollectionOverview);
