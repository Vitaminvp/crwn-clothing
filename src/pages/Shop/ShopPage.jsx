import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/actions";
import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverviewContainer";
import CollectionPageContainer from "../Collection/CollectionPageContainer";

class PureShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
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
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export const ShopPage = connect(
  null,
  mapDispatchToProps
)(PureShopPage);
