function ProductGrid({ products, filters, onNotify }) {
  const { query,setQuery, category,setCategory, sortBy,setSortBy, reset } = filters;
  const hasFilters = query||category!=="Tous"||sortBy!=="default";
  return (
    <section id="collection">
      {/* Toolbar */}
      <div className="toolbar">
        <div className="tb-in">
          <label className="sw" htmlFor="srch">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input id="srch" className="si" type="search" placeholder="Rechercher un article…" value={query} onChange={e=>setQuery(e.target.value)}/>
          </label>
          <select className="ss" value={sortBy} onChange={e=>setSortBy(e.target.value)}>
            {SORT_OPTIONS.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          {hasFilters && <button className="rb" onClick={reset}>Réinitialiser</button>}
        </div>
      </div>
      {/* Cats */}
      <div className="cats">
        <div className="cats-in">
          {CATEGORIES.map(c=>(
            <button key={c} className={`ct${category===c?" on":""}`} onClick={()=>setCategory(c)}>{c}</button>
          ))}
        </div>
      </div>
      {/* Grid */}
      <div className="grid-wrap">
        <div className="grid-hdr">
          <h2 className="grid-title">Notre Collection</h2>
          <span className="grid-count">{products.length} article{products.length!==1?"s":""}</span>
        </div>
        {products.length>0 ? (
          <div className="grid">
            {products.map((p,i)=>(
              <div key={p.id} style={{animationDelay:`${i*35}ms`}}>
                <ProductCard product={p} onAdd={()=>onNotify?.(`${p.name} ajouté au panier`,"success")}/>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-res">
            <span className="nr-ic">🔍</span>
            <p className="nr-t">Aucun article trouvé</p>
            <p className="nr-s">Essayez avec d'autres mots-clés ou <button className="nr-r" onClick={reset}>réinitialisez les filtres</button></p>
          </div>
        )}
      </div>
    </section>
  );
}