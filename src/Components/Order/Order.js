import React from 'react';
import './Order.css';
import { useCart } from '../../context/CartContext';

const Order = () => {
    const { cart } = useCart();

    return (
        <>
            <div className="order__container">
                <div className="order__container-user">
                    <h3 className="order__container-title">User 1 Cart</h3>
                    {cart.starterCart.user1.name !== '' && (
                        <p data-testid="starter" className="order__container-item">
                            {cart.starterCart.user1.name}
                        </p>
                    )}
                    {cart.mainCart.user1.name !== '' && (
                        <p className="order__container-item"> {cart.mainCart.user1.name}</p>
                    )}
                    {cart.dessertCart.user1.name !== '' && (
                        <p className="order__container-item"> {cart.dessertCart.user1.name}</p>
                    )}
                </div>
                <div className="order__container-user">
                    <h3 className="order__container-title">User 2 Cart</h3>
                    {cart.starterCart.user2.name !== '' && (
                        <p className="order__container-item">{cart.starterCart.user2.name}</p>
                    )}
                    {cart.mainCart.user2.name !== '' && (
                        <p className="order__container-item">{cart.mainCart.user2.name}</p>
                    )}
                    {cart.dessertCart.user2.name !== '' && (
                        <p className="order__container-item"> {cart.dessertCart.user2.name}</p>
                    )}
                </div>
            </div>
            <h2 className="order__total">Total: {cart.totalPrice}</h2>
        </>
    );
};

export default Order;
