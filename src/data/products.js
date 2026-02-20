export const PRODUCTS = [
  { id:1,  name:"Veste Minimaliste", price:89,  category:"Vestes",      emoji:"🧥", description:"Coupe ajustée, finitions impeccables",      badge:"Nouveau",      stock:8  },
  { id:2,  name:"T-Shirt Premium",   price:30,  category:"Hauts",        emoji:"👕", description:"100% coton peigné, douceur absolue",        badge:null,           stock:24 },
  { id:3,  name:"Pantalon Chino",    price:65,  category:"Pantalons",    emoji:"👖", description:"Coupe droite moderne, matière stretch",     badge:null,           stock:12 },
  { id:4,  name:"Chemise Lin",       price:55,  category:"Hauts",        emoji:"👔", description:"Lin lavé, col français, légèreté estivale", badge:"Coup de cœur", stock:6  },
  { id:5,  name:"Pull Cachemire",    price:120, category:"Hauts",        emoji:"🧶", description:"Cachemire Grade A, col rond intemporel",    badge:"Exclusif",     stock:4  },
  { id:6,  name:"Manteau Long",      price:180, category:"Vestes",       emoji:"🥼", description:"Laine bouillie, coupe oversize raffinée",   badge:"Nouveau",      stock:3  },
  { id:7,  name:"Jean Slim",         price:75,  category:"Pantalons",    emoji:"👖", description:"Denim japonais, indigo naturel",            badge:null,           stock:15 },
  { id:8,  name:"Sneakers Blancs",   price:110, category:"Chaussures",   emoji:"👟", description:"Cuir pleine fleur, semelle crantée",        badge:"Best-seller",  stock:9  },
  { id:9,  name:"Mocassins Cuir",    price:140, category:"Chaussures",   emoji:"👞", description:"Cuir vélo, finition cirée main",            badge:null,           stock:5  },
  { id:10, name:"Écharpe Laine",     price:45,  category:"Accessoires",  emoji:"🧣", description:"Laine mérinos, teinte naturelle",           badge:null,           stock:20 },
  { id:11, name:"Bonnet Côtelé",     price:25,  category:"Accessoires",  emoji:"🧢", description:"Côtes larges, laine douce",                 badge:null,           stock:30 },
  { id:12, name:"Ceinture Cuir",     price:60,  category:"Accessoires",  emoji:"👜", description:"Pleine fleur, boucle argentée",             badge:null,           stock:11 },
];
export const CATEGORIES = ["Tous", ...new Set(PRODUCTS.map(p => p.category))];
export const SORT_OPTIONS = [
  { value:"default",    label:"Par défaut"     },
  { value:"price-asc",  label:"Prix croissant" },
  { value:"price-desc", label:"Prix décroissant"},
  { value:"name-asc",   label:"Nom A → Z"      },
  { value:"name-desc",  label:"Nom Z → A"      },
];
export const FREE_SHIPPING = 150;