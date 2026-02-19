function CartPanel({ isOpen, onClose }) {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const ref = useRef(null);
  useClickOutside(ref, ()=>{ if(isOpen) onClose(); });
  const remaining = Math.max(0, FREE_SHIPPING - totalPrice);
  const progress  = Math.min(100, (totalPrice/FREE_SHIPPING)*100);
  return (
    <>
      <div className={`backdrop ${isOpen?"on":""}`} aria-hidden="true"/>
      <aside ref={ref} className={`panel ${isOpen?"on":""}`} role="dialog" aria-modal="true" aria-label="Panier">
        <div className="ph">
          <h2 className="pt">
            Panier
            {totalItems>0 && <span className="pc">{totalItems}</span>}
          </h2>
          <button className="xcl" onClick={onClose} aria-label="Fermer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {totalPrice>0 && (
          <div className="ship">
            <div className="ship-track"><div className="ship-fill" style={{width:`${progress}%`}}/></div>
            <p className="ship-txt">{remaining===0?"🎉 Livraison offerte !": `Plus que ${remaining} € pour la livraison gratuite`}</p>
          </div>
        )}

        {items.length===0 ? (
          <div className="empty-cart">
            <span className="ec-ic">🛍</span>
            <p className="ec-t">Votre panier est vide</p>
            <p className="ec-s">Explorez notre collection pour y ajouter des articles.</p>
            <button className="ec-btn" onClick={onClose}>Découvrir la collection</button>
          </div>
        ) : (
          <>
            <ul className="item-list">{items.map(i=><CartItem key={i.id} item={i}/>)}</ul>
            <div className="pfooter">
              <div className="pr1">
                <span className="pr1-l">{totalItems} article{totalItems>1?"s":""}</span>
                <span className="pr1-r">{remaining===0?"Livraison offerte":`Livraison offerte dès ${FREE_SHIPPING} €`}</span>
              </div>
              <div className="pr2">
                <span className="pr2-l">Total</span>
                <span className="pr2-v">{totalPrice} €</span>
              </div>
              <button className="chk">
                Commander
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
              <button className="clr" onClick={clearCart}>Vider le panier</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}