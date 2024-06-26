import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../actions/cartActions';

const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemInCart = state.items.find(item => item.id === action.payload.id);
      if (itemInCart) {
        return state; 
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };
    case REMOVE_FROM_CART:
      const remainingItems = state.items.filter(item => item.id !== action.payload);
      const removedItem = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: remainingItems,
        total: state.total - (removedItem.price * removedItem.quantity),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
        total: state.total + state.items.find(item => item.id === action.payload).price,
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0),
        total: state.total - state.items.find(item => item.id === action.payload).price,
      };
    default:
      return state;
  }
};

export default cartReducer;
