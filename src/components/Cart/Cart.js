import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const {cart} = props;
    
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart) {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice +  product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    const tax = parseInt((totalPrice * 0.1).toFixed(0));
    const grandTotal = totalPrice + shipping + tax;
    // console.log(totalPrice, shipping, tax)
    return (
        <div className='cart'>
            <h3 className='heading'>Order Summary</h3>
            <h5>Selected Item: {quantity}</h5>
            <h5>Total price: ${totalPrice.toFixed(2)}</h5>
            <h5>Total shipping: ${shipping.toFixed(2)}</h5>
            <h5>Tax: ${tax.toFixed(2)}</h5>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;