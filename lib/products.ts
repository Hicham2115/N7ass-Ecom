export type Product = {
  id: string;
  name: string;
  category: string;
  room: string;
  price: number;
  inStock: boolean;
  image: string;
  alt: string;
};

export const catalogCategories = ["Luminaires", "Art de la table", "Vasques", "Décoration murale", "Jardin & extérieur"];
export const catalogRooms = ["Salon", "Salle à manger", "Cuisine", "Salle de bain", "Extérieur"];
export const minimumPrice = 50;
export const maximumPrice = 1200;

export const catalogProducts: Product[] = [
  { id: "scallop-pendant", name: "Suspension festonnée", category: "Luminaires", room: "Salon", price: 420, inStock: true, image: "/cu/pendant-scalloped.jpeg", alt: "Suspension festonnée en cuivre martelé à la main" },
  { id: "atlas-fire-bowl", name: "Brasero Atlas", category: "Jardin & extérieur", room: "Extérieur", price: 980, inStock: true, image: "/cu/firebowl-garden-night.jpeg", alt: "Brasero en cuivre illuminant une terrasse au crépuscule" },
  { id: "hammam-basin", name: "Vasque Hammam", category: "Vasques", room: "Salle de bain", price: 560, inStock: false, image: "/cu/basin-hammered.jpeg", alt: "Vasque de salle de bain en cuivre martelé à la main" },
  { id: "atlas-serve-bowl", name: "Bol de service Atlas", category: "Art de la table", room: "Salle à manger", price: 220, inStock: true, image: "/cu/category-tableware.png", alt: "Bol de service en cuivre accompagné de pièces artisanales" },
  { id: "sunburst-wall-plate", name: "Plateau mural Soleil", category: "Décoration murale", room: "Salon", price: 180, inStock: true, image: "/cu/copper-wall-art.jpeg", alt: "Décoration murale en cuivre martelé inspirée du soleil" },
  { id: "rabat-garden-planter", name: "Jardinière de Rabat", category: "Jardin & extérieur", room: "Extérieur", price: 620, inStock: false, image: "/cu/planter-copper.jpeg", alt: "Grande jardinière en cuivre dans une cour ensoleillée" },
  { id: "rif-ring-pendant", name: "Suspension anneau Rif", category: "Luminaires", room: "Salon", price: 485, inStock: true, image: "/cu/pendant-loop.jpeg", alt: "Suspension sculpturale en cuivre en forme d’anneau" },
  { id: "fes-dome-pendant", name: "Suspension dôme Fès", category: "Luminaires", room: "Salle à manger", price: 395, inStock: false, image: "/cu/pendant-copper.jpeg", alt: "Suspension en cuivre en forme de dôme à la lumière chaleureuse" },
  { id: "patina-pendant", name: "Suspension patinée", category: "Luminaires", room: "Salle à manger", price: 520, inStock: true, image: "/cu/pendant-teal.jpeg", alt: "Suspension en cuivre à la patine bleu canard profonde" },
  { id: "green-patina-pendant", name: "Suspension patine verte", category: "Luminaires", room: "Cuisine", price: 540, inStock: false, image: "/cu/pendant-green.jpeg", alt: "Suspension en cuivre à la patine verte, finie à la main" },
  { id: "copper-basin", name: "Vasque en cuivre", category: "Vasques", room: "Salle de bain", price: 620, inStock: true, image: "/cu/copper-basin.jpeg", alt: "Vasque ronde en cuivre avec intérieur martelé" },
  { id: "hand-hammered-planter", name: "Jardinière martelée à la main", category: "Jardin & extérieur", room: "Extérieur", price: 420, inStock: true, image: "/cu/copper-planter.jpeg", alt: "Jardinière en cuivre martelée à la main" },
  { id: "garden-fire-bowl", name: "Brasero de jardin", category: "Jardin & extérieur", room: "Extérieur", price: 1150, inStock: false, image: "/cu/firebowl-product.jpeg", alt: "Grand brasero en cuivre pour vos soirées en plein air" },
  { id: "living-room-loop-pendant", name: "Suspension anneau pour salon", category: "Luminaires", room: "Salon", price: 395, inStock: true, image: "/cu/pendant-loop-room.png", alt: "Suspension en cuivre dans un intérieur à la lumière douce" },
];
