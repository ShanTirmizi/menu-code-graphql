import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom/extend-expect';
import MenuList from './MenuList';
import { CartProvider } from '../../context/CartContext';
import { mocks } from '../../utils/mocks';

it('renders without crashing', async () => {
    const { findByText, getByText } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <CartProvider>
                <MenuList />
            </CartProvider>
        </MockedProvider>
    );
    expect(getByText('Loading...')).toBeInTheDocument();
    const dessertName = await findByText('Cheesecake');
    expect(dessertName).toBeInTheDocument();
    const starterName = await findByText('Soup');
    expect(starterName).toBeInTheDocument();
    const mainName = await findByText('Meatballs');
    expect(mainName).toBeInTheDocument();
});

it('Rendering the correct value', async () => {
    const { findByTestId } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <CartProvider>
                <MenuList />
            </CartProvider>
        </MockedProvider>
    );
    const prawnCocktail = await findByTestId('Prawn cocktail');
    const salmonFillet = await findByTestId('Salmon fillet');

    expect(prawnCocktail.textContent).toBe('Prawn cocktail');
    expect(salmonFillet.textContent).toBe('Salmon fillet');
});
