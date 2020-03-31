import React, { Component } from "react";

export default class Product extends Component {

  onPurchase = e => {

      const product = {
        name: this.props.product.name,
        price: this.props.product.price,
        totalPrice : this.props.product.price,
        quantity : 1,
        key : this.props.product.key
      }

      this.props.onPurchaseProduct(product);

      this.props.scrollToBottom();

  }  
  render() {
    const product = this.props.product;
    return (
      <div class="product" onClick={this.onPurchase}>
        <img class="product-image" src={product.image} alt="img" />
        <div class="info">
          <span>{product.name}</span>
          <p>₱ {product.price}</p>
        </div>
       
      </div>
    );
  }
}
