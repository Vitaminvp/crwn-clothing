import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../CollectionPreview";
import { selectCollectionsForPreview } from "../../redux/shop/selectors";
import { CollectionsOverviewContainer } from "./CollectionsOverview.style";

const PureCollectionOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export const CollectionOverview = connect(mapStateToProps)(
  PureCollectionOverview
);