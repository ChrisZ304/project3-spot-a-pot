import { useReducer } from "react";
import {
  UPDATE_RESTROOMS,
  ADD_TO_CART,
  UPDATE_USDAMT,
  REMOVE_FROM_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_RESTROOMS:
      return {
        ...state,
        restrooms: [...action.restrooms],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.donation],
      };

    case UPDATE_USDAMT:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(donation => {
          if (action._id === donation._id) {
            donation.purchaseQuantity = action.purchaseQuantity
          }
          return donation
        })
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(donation => {
        return donation._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}