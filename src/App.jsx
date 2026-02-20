import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { useProducts } from "./hooks/useProducts";
import { useNotification } from "./hooks/useNotification";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";
import ProductGrid from "./components/product/ProductGrid";
import CartPanel from "./components/cart/CartPanel";
import Toast from "./components/ui/Toast";
import "./styles/global.css";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  // Hook produits (filtre/tri)
  const filters = useProducts(); // { products, query, setQuery, category, ... }

  // Hook notification
  const { notification, notify, dismiss } = useNotification();

  // Scroll vers la collection
  function scrollToCollection() {
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <CartProvider>
      <Header onCartOpen={() => setCartOpen(true)} />

      <main>
        <Hero onShopClick={scrollToCollection} />

        <ProductGrid
          products={filters?.products || []}
          filters={filters || {}}
          onNotify={notify}
        />
      </main>

      <Footer />

      <CartPanel isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <Toast notification={notification} onDismiss={dismiss} />
    </CartProvider>
  );
}