import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import type { ReactNode } from "react";
import type { Product } from "../types";

type CartLine = {
  product: Product;
  quantity: number;
};

type CartState = {
  lines: CartLine[];
};

type CartAction =
  | { type: "ADD_ITEM"; product: Product; quantity: number }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "CLEAR" };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingIndex = state.lines.findIndex(
        (line) => line.product.id === action.product.id,
      );
      if (existingIndex >= 0) {
        const updatedLines = [...state.lines];
        updatedLines[existingIndex] = {
          ...updatedLines[existingIndex],
          quantity: updatedLines[existingIndex].quantity + action.quantity,
        };
        return { lines: updatedLines };
      }
      return {
        lines: [...state.lines, { product: action.product, quantity: action.quantity }],
      };
    }
    case "REMOVE_ITEM":
      return {
        lines: state.lines.filter((line) => line.product.id !== action.productId),
      };
    case "UPDATE_QUANTITY": {
      const updatedLines = state.lines
        .map((line) =>
          line.product.id === action.productId
            ? { ...line, quantity: Math.max(1, action.quantity) }
            : line,
        )
        .filter((line) => line.quantity > 0);
      return { lines: updatedLines };
    }
    case "CLEAR":
      return { lines: [] };
    default:
      return state;
  }
};

const TAX_RATE = 0.0825;
const BASE_SHIPPING = 14.99;

const CartContext = createContext<{
  lines: CartLine[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totals: {
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
  };
} | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { lines: [] });

  const addItem = useCallback((product: Product, quantity = 1) => {
    dispatch({ type: "ADD_ITEM", product, quantity });
  }, []);

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: "REMOVE_ITEM", productId });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const totals = useMemo(() => {
    const subtotal = state.lines.reduce(
      (sum, line) => sum + line.product.price * line.quantity,
      0,
    );
    const tax = subtotal * TAX_RATE;
    const shipping = subtotal === 0 ? 0 : subtotal >= 299 ? 0 : BASE_SHIPPING;
    const total = subtotal + tax + shipping;
    return {
      subtotal,
      tax,
      shipping,
      total,
    };
  }, [state.lines]);

  const value = useMemo(
    () => ({
      lines: state.lines,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totals,
    }),
    [state.lines, addItem, removeItem, updateQuantity, clearCart, totals],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
