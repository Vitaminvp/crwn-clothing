import React from "react";
import { connect } from "react-redux";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from "./CollectionItem.style";
import { addItem } from "../../redux/cart/actions";

const PureCollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
      <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>
          Add to cart
        </AddButton>
      </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export const CollectionItem = connect(
  null,
  mapDispatchToProps
)(PureCollectionItem);
