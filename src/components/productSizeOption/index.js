import React, { Component } from 'react';
import './index.css';


class ProductSizeOption extends Component {
  render() {
    return (
      <option value={this.props.size}>Size: {this.props.size}</option>
    );
  }
}

export default ProductSizeOption;
