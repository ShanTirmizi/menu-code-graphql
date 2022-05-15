import React, { useReducer, useContext, createContext } from 'react';
import { constants } from '../utils/constants';
import { cartReducer } from '../reducer/CartReducer';

export const CartContext = createContext();

const initialState = {
    starterCart: {
        user1: {
            id: '',
            name: '',
            price: 0,
        },
        user2: {
            id: '',
            name: '',
            price: 0,
        },
    },
    mainCart: {
        user1: {
            id: '',
            name: '',
            price: 0,
        },
        user2: {
            id: '',
            name: '',
            price: 0,
        },
    },
    dessertCart: {
        user1: {
            id: '',
            name: '',
            price: 0,
        },
        user2: {
            id: '',
            name: '',
            price: 0,
        },
    },

    totalPrice: 0,
    user: 'user1',
    error: '',
    errorState: false,
    cartFullState: {
        user1: false,
        user2: false,
    },
};
export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (item, type, user) => {
        dispatch({ type: constants.ADD_TO_CART, payload: { item, type, user } });
    };

    const removeError = () => {
        dispatch({ type: constants.REMOVE_ERROR });
    };
    const isCartFull = (userCart) => {
        dispatch({ type: constants.IS_CART_FULL, payload: { userCart } });
    };

    const totalPrice = () => {
        dispatch({ type: constants.TOTAL_PRICE });
    };

    const toggleUser = (user) => {
        dispatch({ type: constants.TOGGLE_USER, payload: { user } });
    };

    return (
        <CartContext.Provider value={{ cart, dispatch, addToCart, totalPrice, removeError, isCartFull, toggleUser }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
