import React from 'react';
import { CartProvider, useCart } from '../../context/CartContext';
import './UserSelection.css';
const UserSelection = () => {
    const { cart, toggleUser } = useCart();
    return (
        <div className='select'>
            <select className='select-option-box' onChange={() => toggleUser(cart.user)} name="selectList" id="selectList">
                  <option value="User 1">user 1</option>  <option value="User 2">User 2</option>
            </select>
        </div>
    );
};

export default UserSelection;
