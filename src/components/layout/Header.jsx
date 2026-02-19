function Header({ onCartOpen }) {
  const { totalItems } = useCart();
  return (
    <header className="hdr">
      <div className="hdr-in">
        <a href="#" className="logo">CleanStyle</a>
        <nav className="nav">
          {["Collection","Lookbook","À Propos"].map(l=><a key={l} href="#" className="nl">{l}</a>)}
        </nav>
        <button className="cb" onClick={onCartOpen} aria-label="Ouvrir le panier">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          <span>Panier</span>
          {totalItems>0 && <span className="cb-badge">{totalItems}</span>}
        </button>
      </div>
    </header>
  );
}
