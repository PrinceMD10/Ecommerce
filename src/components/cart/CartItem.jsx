import { useCart } from "../../context/CartContext";

function CartItem({ item }) {
  const { updateQty, removeItem } = useCart();
  return (
    <li className="ci">
      <div className="ci-em">{item.emoji}</div>
      <div className="ci-det">
        <p className="ci-name">{item.name}</p>
        <p className="ci-up">{item.price} € / unité</p>
      </div>
      <div className="qc">
        <button className="qb" onClick={()=>updateQty(item.id,-1)}>−</button>
        <span className="qn">{item.qty}</span>
        <button className="qb" onClick={()=>updateQty(item.id,+1)}>+</button>
      </div>
      <span className="lt">{item.price*item.qty} €</span>
      <button className="rmv" onClick={()=>removeItem(item.id)} aria-label="Supprimer">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </li>
  );
}

export default CartItem;