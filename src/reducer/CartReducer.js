import { constants } from '../utils/constants';
export const cartReducer = (state, action) => {
    switch (action.type) {
        case constants.ADD_TO_CART:
            const { item, type, user } = action.payload;
            if (type === constants.STARTER) {
                if (item.name === 'Prawn cocktail' && state.mainCart[user].name === 'Salmon fillet') {
                    return {
                        ...state,
                        error: 'Pierre the snobby waiter will not let you have a prawn cocktail and salmon fillet in the same meal.',
                        errorState: true,
                    };
                }
                if (state.mainCart[user].name === '' && state.dessertCart[user].name !== '') {
                    return {
                        ...state,
                        error: 'Please select a Main',
                        errorState: true,
                    };
                }

                return {
                    ...state,
                    starterCart: { ...state.starterCart, [state.user]: item },
                };
            } else if (type === constants.MAIN) {
                if (item.name === 'Salmon fillet' && state.starterCart[user].name === 'Prawn cocktail') {
                    return {
                        ...state,
                        error: 'Pierre the snobby waiter will not let you have a prawn cocktail and salmon fillet in the same meal.',
                        errorState: true,
                    };
                }

                if (state.user === 'user2' && state.mainCart.user1.name === item.name) {
                    return {
                        ...state,
                        error: 'Each diner cannot have more than one of the same course',
                        errorState: true,
                    };
                }
                if (state.user === 'user1' && state.mainCart.user2.name === item.name) {
                    return {
                        ...state,
                        error: 'Each diner cannot have more than one of the same course',
                        errorState: true,
                    };
                }

                return {
                    ...state,
                    mainCart: { ...state.mainCart, [state.user]: item },
                };
            } else if (type === constants.DESSERT) {
                if (state.starterCart[user].name !== '' && state.mainCart[user].name === '') {
                    return {
                        ...state,
                        error: 'Please select a Main',
                        errorState: true,
                    };
                }

                if (
                    (item.name === 'Cheesecake' && state.dessertCart.user1.name === 'Cheesecake') ||
                    state.dessertCart.user2.name === 'Cheesecake'
                ) {
                    return {
                        ...state,
                        error: 'There is only one piece of cheesecake left.',
                        errorState: true,
                    };
                }
                return {
                    ...state,
                    dessertCart: { ...state.dessertCart, [state.user]: item },
                };
            }
        case constants.REMOVE_ERROR:
            return {
                ...state,
                error: '',
                errorState: false,
            };
        case constants.TOTAL_PRICE:
            return {
                ...state,
                totalPrice:
                    state.starterCart.user1.price +
                    state.mainCart.user1.price +
                    state.dessertCart.user1.price +
                    state.starterCart.user2.price +
                    state.mainCart.user2.price +
                    state.dessertCart.user2.price,
            };
        case constants.TOGGLE_USER:
            if (state.user === 'user1') {
                return {
                    ...state,
                    user: 'user2',
                };
            }
            if (state.user === 'user2') {
                return {
                    ...state,
                    user: 'user1',
                };
            }
        case constants.IS_CART_FULL:
            const { userCart } = action.payload;
            if (state.mainCart[userCart].name !== '' && state.starterCart[userCart].name !== '') {
                return {
                    ...state,
                    cartFullState: { ...state.cartFullState, [userCart]: true },
                };
            }
            if (state.mainCart[userCart].name !== '' && state.dessertCart[userCart].name !== '') {
                return {
                    ...state,
                    cartFullState: { ...state.cartFullState, [userCart]: true },
                };
            }
        default:
            return state;
    }
};
