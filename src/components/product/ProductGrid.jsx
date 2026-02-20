import ProductCard from "../product/ProductCard";
import { CATEGORIES, SORT_OPTIONS } from "../../data/products";

function ProductGrid({ products, filters, onNotify }) {
  const {
    query, setQuery,
    category, setCategory,
    sortBy, setSortBy,
    reset
  } = filters || {};

  const hasFilters = query || category !== "Tous" || sortBy !== "default";

  return (
    <section id="collection" className="grid-wrap">
      {/* Barre de filtres */}
      <div className="tb-in filters">
        <input
          type="search"
          className="sw si"
          placeholder="Rechercher..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          aria-label="Recherche produits"
          autoComplete="off"
        />

        <select
          className="ss"
          value={category}
          onChange={e => setCategory(e.target.value)}
          aria-label="Filtrer par catégorie"
        >
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          className="ss"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          aria-label="Trier les produits"
        >
          {SORT_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>

        {hasFilters && (
          <button
            className="rb reset-btn"
            onClick={reset}
            aria-label="Réinitialiser les filtres"
            type="button"
          >
            Réinitialiser
          </button>
        )}
      </div>

      {/* Nombre de résultats */}
      <p className="grid-count" style={{ margin: "0 0 24px 48px" }}>
        {products.length} produit{products.length > 1 ? "s" : ""} trouvé{products.length > 1 ? "s" : ""}
      </p>

      {/* Grille produits */}
      <div className="grid">
        {products.length === 0 ? (
          <p className="no-res" style={{ gridColumn: "1 / -1" }}>
            Aucun produit ne correspond à votre recherche.
          </p>
        ) : (
          products.map(product => (
            <ProductCard key={product.id} product={product} onAdd={onNotify} />
          ))
        )}
      </div>
    </section>
  );
}

export default ProductGrid;