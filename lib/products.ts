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

export const catalogCategories = ["Lighting", "Tableware", "Bathroom Basins", "Wall Decor", "Garden & Outdoor"];
export const catalogRooms = ["Living Room", "Dining Room", "Kitchen", "Bathroom", "Outdoor"];
export const minimumPrice = 50;
export const maximumPrice = 1200;

export const catalogProducts: Product[] = [
  { id: "scallop-pendant", name: "Scallop Pendant Light", category: "Lighting", room: "Living Room", price: 420, inStock: true, image: "/cu/pendant-scalloped.jpeg", alt: "Hand-hammered scalloped copper pendant light" },
  { id: "atlas-fire-bowl", name: "Atlas Fire Bowl", category: "Garden & Outdoor", room: "Outdoor", price: 980, inStock: true, image: "/cu/firebowl-garden-night.jpeg", alt: "Copper fire bowl glowing on a garden terrace at dusk" },
  { id: "hammam-basin", name: "Hammam Basin", category: "Bathroom Basins", room: "Bathroom", price: 560, inStock: false, image: "/cu/basin-hammered.jpeg", alt: "Hand-hammered copper bathroom basin" },
  { id: "atlas-serve-bowl", name: "Atlas Serve Bowl", category: "Tableware", room: "Dining Room", price: 220, inStock: true, image: "/cu/category-tableware.png", alt: "Copper serving bowl with handmade vessels" },
  { id: "sunburst-wall-plate", name: "Sunburst Wall Plate", category: "Wall Decor", room: "Living Room", price: 180, inStock: true, image: "/cu/copper-wall-art.jpeg", alt: "Sunburst-inspired hammered copper wall plate" },
  { id: "rabat-garden-planter", name: "Rabat Garden Planter", category: "Garden & Outdoor", room: "Outdoor", price: 620, inStock: false, image: "/cu/planter-copper.jpeg", alt: "Tall copper planter in a sunlit courtyard" },
  { id: "rif-ring-pendant", name: "Rif Ring Pendant", category: "Lighting", room: "Living Room", price: 485, inStock: true, image: "/cu/pendant-loop.jpeg", alt: "Sculptural loop-shaped copper pendant" },
  { id: "fes-dome-pendant", name: "Fes Dome Pendant", category: "Lighting", room: "Dining Room", price: 395, inStock: false, image: "/cu/pendant-copper.jpeg", alt: "Dome-shaped copper pendant with a warm glow" },
  { id: "patina-pendant", name: "Patina Pendant", category: "Lighting", room: "Dining Room", price: 520, inStock: true, image: "/cu/pendant-teal.jpeg", alt: "Copper pendant finished with a deep teal patina" },
  { id: "green-patina-pendant", name: "Green Patina Pendant", category: "Lighting", room: "Kitchen", price: 540, inStock: false, image: "/cu/pendant-green.jpeg", alt: "Hand-finished copper pendant with green patina" },
  { id: "copper-basin", name: "Copper Basin", category: "Bathroom Basins", room: "Bathroom", price: 620, inStock: true, image: "/cu/copper-basin.jpeg", alt: "Round copper basin with a hammered interior" },
  { id: "hand-hammered-planter", name: "Hand-hammered Planter", category: "Garden & Outdoor", room: "Outdoor", price: 420, inStock: true, image: "/cu/copper-planter.jpeg", alt: "Hand-hammered copper planter" },
  { id: "garden-fire-bowl", name: "Garden Fire Bowl", category: "Garden & Outdoor", room: "Outdoor", price: 1150, inStock: false, image: "/cu/firebowl-product.jpeg", alt: "Large copper fire bowl for outdoor gatherings" },
  { id: "living-room-loop-pendant", name: "Loop Pendant in a Living Space", category: "Lighting", room: "Living Room", price: 395, inStock: true, image: "/cu/pendant-loop-room.png", alt: "Copper pendant hanging in a softly lit interior" },
];
