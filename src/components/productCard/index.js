import React, { Component } from 'react';
import './index.css';
import ProductSizeOption from '../productSizeOption';


class ProductCard extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card">
          <img className="card-img" src="http://placehold.it/250x250" alt={this.props.product.name} />
          <p className="card-title">{this.props.product.name}</p>
          <p className="card-subtitle">${this.props.product.price}</p>
          <select id={"size" + this.props.product.id}>
            {this.props.product.sizes &&
              this.props.product.sizes.map(size =>
                <ProductSizeOption key={size} size={size} />
              )
            }
          </select>
          <button onClick={() => this.props.addItem(this.props.product.id)} className="btn btn-success">Add Item</button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
