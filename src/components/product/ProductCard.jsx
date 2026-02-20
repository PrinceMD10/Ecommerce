import { useState } from "react";
import { useCart } from "../../context/CartContext";

function ProductCard({ product, onAdd }) {
  const [ok, setOk] = useState(false);
  const { addItem } = useCart();

  function handle() {
    addItem(product);
    setOk(true);
    onAdd?.(product);
    setTimeout(() => setOk(false), 700);
  }

  return (
    <article className="card">
      {product.badge && <span className="card-badge">{product.badge}</span>}
      <div className="card-img"><span className="card-em">{product.emoji}</span></div>
      <div className="card-info">
        <span className="card-cat">{product.category}</span>
        <h3 className="card-name">{product.name}</h3>
        <p className="card-desc">{product.description}</p>
        {product.stock <= 5 && <p className="card-low">⚠ Plus que {product.stock} en stock</p>}
        <div className="card-foot">
          <span className="card-price">{product.price} €</span>
          <button className={`add-btn${ok ? " ok" : ""}`} onClick={handle} aria-label={`Ajouter ${product.name}`}>
            {ok ? (
              <>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Ajouté
              </>
            ) : "Ajouter"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;