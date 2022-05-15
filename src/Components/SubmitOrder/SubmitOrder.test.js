import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom/extend-expect';
import SubmitOrder from './SubmitOrder';
import { CartProvider } from '../../context/CartContext';
import { mocks } from '../../utils/mocks';

it('renders without crashing', async () => {
    const { getByText } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <CartProvider>
                <SubmitOrder />
            </CartProvider>
        </MockedProvider>
    );

    const SubmitBtn = getByText('Submit order');
    expect(SubmitBtn.className).toBe('btn Inactive');
});
