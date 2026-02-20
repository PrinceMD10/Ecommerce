import { useState, useMemo } from "react";
import { PRODUCTS } from "../data/products";

export function useProducts() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tous");
  const [sortBy, setSortBy] = useState("default");

  const products = useMemo(() => {
    let result = [...PRODUCTS];

    // Filtre par catégorie
    if (category !== "Tous") {
      result = result.filter(p => p.category === category);
    }

    // Filtre par recherche texte
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Tri
    switch (sortBy) {
      case "price-asc": result.sort((a,b)=>a.price-b.price); break;
      case "price-desc": result.sort((a,b)=>b.price-a.price); break;
      case "name-asc": result.sort((a,b)=>a.name.localeCompare(b.name)); break;
      case "name-desc": result.sort((a,b)=>b.name.localeCompare(a.name)); break;
      default: break;
    }

    return result;
  }, [query, category, sortBy]);

  function reset() {
    setQuery("");
    setCategory("Tous");
    setSortBy("default");
  }

  return {
    products,
    query, setQuery,
    category, setCategory,
    sortBy, setSortBy,
    reset,
    totalCount: PRODUCTS.length,
    totalFiltered: products.length
  };
}