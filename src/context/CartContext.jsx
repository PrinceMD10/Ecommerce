import { createContext, useReducer, useCallback, useContext } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch(action.type) {
    case "ADD": {
      const ex = state.find(i=>i.id===action.p.id);
      return ex ? state.map(i=>i.id===action.p.id?{...i,qty:i.qty+1}:i) : [...state,{...action.p,qty:1}];
    }
    case "REMOVE": return state.filter(i=>i.id!==action.id);
    case "UPDATE": return state.map(i=>i.id===action.id?{...i,qty:i.qty+action.d}:i).filter(i=>i.qty>0);
    case "CLEAR":  return [];
    default: return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  const addItem = useCallback((p) => dispatch({ type: "ADD", p }), []);
  const removeItem = useCallback((id) => dispatch({ type: "REMOVE", id }), []);
  const updateQty = useCallback((id, d) => dispatch({ type: "UPDATE", id, d }), []);
  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const totalItems = items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, totalItems, totalPrice, addItem, removeItem, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}