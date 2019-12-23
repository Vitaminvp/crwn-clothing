import React from "react";
import { connect } from "react-redux";
import "./CollectionItem.scss";
import { FormButton } from "../FormButton/FormButton";
import { addItem } from "../../redux/cart/actions";

const PureCollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <FormButton onClick={() => addItem(item)} inverted>
        Add to cart
      </FormButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export const CollectionItem = connect(
  null,
  mapDispatchToProps
)(PureCollectionItem);
