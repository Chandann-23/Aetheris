import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the structure of a product in the cart
export interface CartItem {
  id: string;
  name: string;
  price: number; // numeric representation in INR
  desc: string;
  image?: string;
  quantity: number;
}

// Define the store's state and action functions
interface CartState {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      // Add item or increment quantity if it already exists
      addToCart: (newItem) => {
        const currentCart = get().cart;
        const existingItem = currentCart.find((item) => item.id === newItem.id);

        if (existingItem) {
          set({
            cart: currentCart.map((item) =>
              item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          });
        } else {
          set({ cart: [...currentCart, { ...newItem, quantity: 1 }] });
        }
      },

      // Remove an item entirely from the cart
      removeFromCart: (id) => {
        set({ cart: get().cart.filter((item) => item.id !== id) });
      },

      // Update quantity of a specific item
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id);
          return;
        }
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },

      // Clear the whole cart after a successful checkout sync
      clearCart: () => set({ cart: [] }),

      // Calculate the absolute cash total in INR
      getTotalPrice: () => {
        return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      // Calculate total item count for the Navbar badge
      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'aetheris-cart-storage', // The tracking unique key inside localstore
    }
  )
);
