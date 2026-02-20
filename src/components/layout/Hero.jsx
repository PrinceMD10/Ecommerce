function Hero({ onShopClick }) {
  return (
    <section className="hero">
      <div className="hero-c">
        <p className="hero-ey">Collection Printemps — Été 2025</p>
        <h1 className="hero-t">
          L'élégance<br /><em>dépouillée</em>
        </h1>
        <p className="hero-s">
          Des pièces essentielles taillées pour durer.<br />
          Une qualité sans compromis.
        </p>
        <button className="hero-btn" onClick={onShopClick}>
          Explorer la collection
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
      <div className="stats" aria-hidden="true">
        {[
          { v: "100%", l: "Fibres naturelles" },
          { v: "+500", l: "Clients satisfaits" },
          { v: "3 ans", l: "Garantie produit" }
        ].map((s) => (
          <div key={s.l} className="stat">
            <span className="sv">{s.v}</span>
            <span className="sl">{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;