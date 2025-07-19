"use client";

import React, { createContext, useReducer, Dispatch, ReactNode } from "react";

export interface CartItem {
  id: string; // A unique ID generated from product options
  name: string;
  purchaseType: "one-time" | "subscription" | "simple";
  bundle?: "single" | "double";
  flavor1?: string;
  flavor2?: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "id"> }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  items: [],
};

const generateCartId = (item: Omit<CartItem, "id" | "quantity">): string => {
  if (item.purchaseType === 'simple') {
    return `${item.name}`;
  }
  return `${item.name}-${item.purchaseType}-${item.bundle}-${item.flavor1}-${item.flavor2 || ''}`;
};


const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const id = generateCartId(action.payload);
      const existingItemIndex = state.items.findIndex((item) => item.id === id);

      if (existingItemIndex > -1) {
        // Update quantity if item exists
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: updatedItems };
      } else {
        // Add new item
        return {
          ...state,
          items: [...state.items, { ...action.payload, id }],
        };
      }
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    }
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0), // Remove if quantity is 0
      };
    }
    case "CLEAR_CART": {
      return { ...state, items: [] };
    }
    default:
      return state;
  }
};

export const CartContext = createContext<{
  state: CartState;
  dispatch: Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
