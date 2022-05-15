import React from 'react';
import {useCart} from '../../context/CartContext';
import './../../App.css'
import './/SubmitOrder.css'

const SubmitOrder = () => {
    const { cart} = useCart();
    return (
        <div  className='submit'>
            {' '}
            {!cart.cartFullState.user1 || !cart.cartFullState.user2 ? (
                <h3>Each person must have at least two courses, one of which must be a main.</h3>
            ) : null}
            <button data-testid='test-btn' className={`btn ${cart.cartFullState.user1 && cart.cartFullState.user2 ? 'Active' : 'Inactive'}`}>
                Submit order
            </button>
        </div>
    );
};

export default SubmitOrder;
