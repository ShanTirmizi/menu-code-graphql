import React from 'react'
import {  useCart } from '../../context/CartContext';
import './Popup.css'
import '../../App.css'


const Popup = () => {
    const { removeError, cart} = useCart();
  return (
    <>
        {cart.errorState && (
            <div className="popup">
                <div className="popup_inner">
                  <h1>Opps looks like we have an error</h1>
                    <h3 data-testid='error-msg'>{cart.error}</h3>
                    <button className='btn' onClick={() => removeError()}>Close</button>
                </div>
            </div>
          
        )}
    </>


  )
}

export default Popup