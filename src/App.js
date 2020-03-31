import React, { Component } from "react";
import CartProduct from "./CartProduct";
import Product from "./Product";
import "./App.css";

export default class App extends Component {
  state = {
    purchasedProducts: [],
    totalDue: 0,
    products: [
      {
        key: "1",
        name: "LeBron XVII",
        price: 8520,
        image:
          "https://hypebeast.com/image/2019/05/nike-lebron-16-heritage-sneaker-0022.jpg"
      },
      {
        key: "2",
        name: "Lakers T-Shirt",
        price: 5440,
        image:
          "https://static.titan22.com/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/a/v/av4646-732-a.png"
      },
      {
        key: "3",
        name: "Warriors T Shirt",
        price: 6620,
        image:
          "https://static.titan22.com/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/a/v/av4947-404-a.png"
      }
    ]
  };

  onPurchaseProduct = product => {
    var purchaseList = this.state.purchasedProducts;

    if (purchaseList.findIndex(x => x.key === product.key) === -1) {
      purchaseList.push(product);
    } else {
      var index = purchaseList.findIndex(x => x.key === product.key);
      purchaseList[index].quantity++;
      purchaseList[index].totalPrice = this.calculateTotalDue(
        purchaseList[index]
      );
    }

    this.calculateTotalCheckout(purchaseList);

    this.setState({
      purchasedProducts: purchaseList
    });
  };

  onDecrementProduct = product => {
    var purchaseList = this.state.purchasedProducts;

    var index = purchaseList.findIndex(x => x.key === product.key);

    if (purchaseList[index].quantity === 1) {
      purchaseList = purchaseList.filter(x => x.key !== product.key);
    } else {
      purchaseList[index].quantity--;
      purchaseList[index].totalPrice = this.calculateTotalDue(
        purchaseList[index]
      );
    }

    this.calculateTotalCheckout(purchaseList);

    this.setState({
      purchasedProducts: purchaseList
    });
  };

  onRemoveProduct = product => {
    var purchaseList = this.state.purchasedProducts;

    purchaseList = purchaseList.filter(x => x.key !== product.key);

    this.calculateTotalCheckout(purchaseList);
    this.setState({
      purchasedProducts: purchaseList
    });
  };

  calculateTotalDue = product => {
    return product.price * product.quantity;
  };

  calculateTotalCheckout = list => {
    var totalDue = 0;
    list.forEach(product => {
      totalDue += product.totalPrice;
    });

    this.setState({ totalDue: totalDue });
  };

  scrollToBottom = () => {

    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <div className="App">
        <div class="product-list">
          {this.state.products.map(product => {
            return (
              <Product
                onPurchaseProduct={this.onPurchaseProduct}
                key={product.key}
                product={product}
                scrollToBottom={this.scrollToBottom}
              />
            );
          })}
        </div>

        <div class="shopping-cart">
          <div class="title">Shopping Cart</div>

          {this.state.purchasedProducts.map(purchased => {
            return (
              <CartProduct
                key={purchased.key}
                purchased={purchased}
                onIncrement={this.onPurchaseProduct}
                onDecrement={this.onDecrementProduct}
                onRemove={this.onRemoveProduct}
              />
            );
          })}
        </div>

        <div class="checkout-button">
          <h3>Total due: </h3>
          <h2>₱ {this.state.totalDue}</h2>
        </div>

        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    );
  }
}
