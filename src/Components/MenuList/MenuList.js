import React from 'react';
import { useCart } from '../../context/CartContext';
import { constants } from '../../utils/constants';
import { useQuery } from '@apollo/client';
import { MenuDataApi } from '../../api/MenuDataApi';
import './MenuList.css';

const MenuList = () => {
    const { cart, addToCart } = useCart();
    const { data, loading } = useQuery(MenuDataApi);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="menu">
                    <h1 className="menu_title menu_title-main">MenuList</h1>
                    <h2 className="menu_title">Starters</h2>
                    {data.menu.starters.map((item, index) => {
                        const type = constants.STARTER;
                        return (
                            <div className="menu_list-item" key={index}>
                                <h4 data-testid={`${item.name}`}>{item.name}</h4>
                                <p>£{item.price}</p>
                                <button
                                    data-testid={`${item.name}-btn`}
                                    className="btn"
                                    onClick={() => addToCart(item, type, cart.user)}
                                >
                                    Select
                                </button>
                            </div>
                        );
                    })}
                    <h2 className="menu_title">Mains</h2>
                    {data.menu.mains.map((item, index) => {
                        const type = constants.MAIN;
                        return (
                            <div className="menu_list-item" key={index}>
                                <h4 data-testid={`${item.name}`}>{item.name}</h4>
                                <p>£{item.price}</p>
                                <button
                                    data-testid={`${item.name}-btn`}
                                    className="btn"
                                    onClick={() => addToCart(item, type, cart.user)}
                                >
                                    Select
                                </button>
                            </div>
                        );
                    })}
                    <h2 className="menu_title">Desserts</h2>
                    {data.menu.desserts.map((item, index) => {
                        const type = constants.DESSERT;
                        return (
                            <div className="menu_list-item" key={index}>
                                <h4 data-testid={`${item.name}`}>{item.name}</h4>
                                <p>£{item.price}</p>
                                <button
                                    data-testid={`${item.name}-btn`}
                                    className="btn"
                                    onClick={() => addToCart(item, type, cart.user)}
                                >
                                    Select
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default MenuList;
