import { useReducer } from "react";
import {
  UPDATE_RESTROOMS,
  ADD_TO_DONATIONCART,
  UPDATE_USDAMT,
  REMOVE_FROM_DONATIONCART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_DONATIONCART,
  TOGGLE_DONATIONCART,
  REMOVE_FROM_DONATIONCART
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_RESTROOMS:
      return {
        ...state,
        restrooms: [...action.restrooms],
      };

    case ADD_TO_DONATIONCART:
      return {
        ...state,
        donationCartOpen: true,
        donationCart: [...state.donationCart, action.donation],
      };

    case UPDATE_USDAMT:
      return {
        ...state,
        donationCartOpen: true,
        donationCart: state.donationCart.map(donation => {
          if (action._id === donation._id) {
            donation.usdAmt = action.usdAmt
          }
          return donation
        })
      };

    case REMOVE_FROM_DONATIONCART:
      let newState = state.donationCart.filter(donation => {
        return donation._id !== action._id;
      });

      return {
        ...state,
        donationCartOpen: newState.length > 0,
        donationCart: newState
      };

    case CLEAR_CART:
      return {
        ...state,
        donationCartOpen: false,
        donationCart: []
      };

    case TOGGLE_DONATIONCART:
      return {
        ...state,
        donationCartOpen: !state.donationCartOpen
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