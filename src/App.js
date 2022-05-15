import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import { MenuDataApi } from './api/MenuDataApi';
import { CartProvider, useCart } from './context/CartContext';
import Popup from './Components/Popup/Popup';
import Menu from './Components/Menu/Menu';
import SubmitOrder from './Components/SubmitOrder/SubmitOrder';
import Order from './Components/Order/Order';

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

function App() {
    const { cart, totalPrice, isCartFull } = useCart();
    const { loading, data } = useQuery(MenuDataApi);
    console.log(data, loading, 'Data');

    useEffect(() => {
        isCartFull(cart.user);
        totalPrice();
    }, [cart.starterCart, cart.mainCart, cart.dessertCart]);

    return (
        <div className="app">
            {loading ? (
                <p>loading...</p>
            ) : (
                <>
                    <Popup />
                    <div className="app_item">
                        <div className="app_item-left">
                            <Menu />
                        </div>
                        <div className="app_item-right">
                            <Order />
                            <SubmitOrder />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
render(
    <ApolloProvider client={client}>
        <CartProvider>
            <App />
        </CartProvider>
    </ApolloProvider>,
    document.getElementById('root')
);
