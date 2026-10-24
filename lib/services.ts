export type Service = {
  id: string;
  name: string;
  category: string;
  room: string;
  image: string;
  alt: string;
  detail: string;
};

export const services: Service[] = [
  { id: "kitchens", name: "Cuisines sur mesure", category: "Cuisines", room: "Cuisine", image: "/tcap-kitchen.webp", alt: "Cuisine aménagée sur mesure", detail: "Agencements en MDF, finitions brillantes ou effet noyer, plans de travail et pose de carrelage." },
  { id: "bedrooms", name: "Chambres aménagées", category: "Chambres", room: "Chambre", image: "/tcap-bedroom.webp", alt: "Chambre aménagée avec tête de lit", detail: "Lits, têtes de lit, papier peint mural et choix de tissus pour composer votre espace." },
  { id: "living-rooms", name: "Salons & mobilier", category: "Salons", room: "Salon", image: "/tcap-salon.webp", alt: "Salon contemporain avec mobilier", detail: "Salons modernes ou marocains, rangements intégrés et mobilier adapté à votre intérieur." },
  { id: "finishes", name: "Finitions & extérieur", category: "Finitions", room: "Extérieur", image: "/tcap-exterior.webp", alt: "Aménagement extérieur réalisé par T.cap", detail: "Carrelage, habillage mural, volets roulants motorisés et options domotiques." },
];
