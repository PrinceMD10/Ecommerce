src/
│
├── main.jsx                        ← Bootstrap React (createRoot)
├── App.jsx                         ← Orchestre l'état global
│
├── styles/
│   └── global.css                  ← Design tokens CSS (--gold, --ink, --paper…)
│
├── data/
│   └── products.js                 ← 12 produits + CATEGORIES + SORT_OPTIONS
│
├── context/
│   └── CartContext.jsx             ← useReducer (ADD/REMOVE/UPDATE/CLEAR) + Provider
│
├── hooks/
│   ├── useProducts.js              ← Filtrage/recherche/tri mémoïsé
│   ├── useNotification.js          ← Toast auto-dismiss
│   └── useClickOutside.js          ← Utilitaire click extérieur
│
└── components/
    ├── layout/
    │   ├── Header.jsx + .module.css
    │   ├── Hero.jsx   + .module.css
    │   └── Footer.jsx + .module.css
    ├── product/
    │   ├── ProductCard.jsx + .module.css
    │   └── ProductGrid.jsx + .module.css
    ├── cart/
    │   ├── CartPanel.jsx + .module.css
    │   └── CartItem.jsx  + .module.css
    └── ui/
        └── Toast.jsx + .module.css