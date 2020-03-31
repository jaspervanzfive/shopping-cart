import React, { Component } from 'react'
import minusButton from './images/minus.svg';
import plusButton from './images/plus.svg';

export default class CartProduct extends Component {

    onIncrement = e => {
        const product = {
          key : this.props.purchased.key
        }
  
        this.props.onIncrement(product);
    } 

    onDecrement = e => {
        const product = {
          key : this.props.purchased.key
        }
  
        this.props.onDecrement(product);
    } 

    onRemove = e => {
        const product = {
            key : this.props.purchased.key
          }
    
          this.props.onRemove(product);

    }




    render() {

        const product = this.props.purchased;


        return (
            <div class="item">
            <div class="buttons">
              <span onClick={this.onRemove} class="delete-btn"></span>
            </div>

            <div class="image">
              <img src="" alt="" />
            </div>

            <div class="description">
              <span>{product.name}</span>
              <span>₱ {product.price}</span>
              <span> x {product.quantity}</span>
            </div>

            <div class="quantity">
              <button class="plus-btn" onClick={this.onIncrement} type="button" name="button">
                <img src={plusButton} alt="" />
              </button>
              <input type="text" name="name" value={product.quantity} />
              <button class="minus-btn" onClick={this.onDecrement} type="button" name="button">
                <img src={minusButton} alt="" />
              </button>
            </div>

            <div class="total-price">₱ {product.totalPrice}</div>
          </div>
        )
    }
}

