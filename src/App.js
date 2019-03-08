import React, { Component } from 'react';
import './App.css';
import ProductCard from './components/productCard';
import products from './static/data/products';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: []
    }
  }

  componentWillMount() {
    this.setState({
      'products': products
    });
  }

  addItem = id => {
    let cart = this.state.cart;

    for (let i in this.state.products) {
      if (this.state.products[i].id === id) {
        let item = this.state.products[i];
        let size = document.getElementById(`size${id}`).value;
        cart.push({
          'id': id,
          'name': item.name,
          'size': size,
          'price': item.price,
          'desc': item.desc
        });
        break;
      }
    }

    this.setState({ 'cart': cart });

    console.log(this.state.cart);
  }



  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            {this.state.products &&
              this.state.products.map( product =>
                <ProductCard key={product.id} product={product} addItem={this.addItem} />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
