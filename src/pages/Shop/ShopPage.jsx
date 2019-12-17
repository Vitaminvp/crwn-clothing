import React, { Component } from 'react';

import SHOP_DATA from './data';

import CollectionPreview from '../../components/CollectionPreview';

export class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
        <div className='shop-page'>
          {collections.map(({ id, ...restProps }) => (
              <CollectionPreview key={id} {...restProps} />
          ))}
        </div>
    );
  }
}
